'use server';

import { revalidatePath } from 'next/cache';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import { adminRegistrationSchema } from '@/app/lib/validations/admin';
import { uploadProfileImage } from '@/app/middleware/imageUpload';
import { sendLoginEmail, sendWelcomeEmail } from '@/app/lib/mail';

export async function registerAdmin(formData, req) {
  try {
    // Connect to database
    await connectDB();

    // Extract form data
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    // Validate data
    const validatedData = adminRegistrationSchema.parse(data);

    // Check if admin exists
    const existingAdmin = await Admin.findOne({
      email: validatedData.email
    });

    if (existingAdmin) {
      return {
        success: false,
        error: 'Admin with this email already exists'
      };
    }

    // Check if username exists only if username is provided
    const username = formData.get('username');
    if (username) {
      const existingUsername = await Admin.findOne({
        username: username
      });

      if (existingUsername) {
        return {
          success: false,
          error: 'This username is already taken'
        };
      }
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(validatedData.password, salt);

    // Create admin
    const admin = await Admin.create({
      email: validatedData.email,
      password: hashedPassword,
      registrationIP: 'unknown' // Will be set by middleware
    });

    // Send welcome email
    await sendWelcomeEmail(admin);

    // Generate token
    const token = jwt.sign(
      { id: admin._id, email: admin.email, role: admin.role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    // Remove sensitive data
    const adminResponse = admin.toObject();
    delete adminResponse.password;
    delete adminResponse.resetPasswordToken;
    delete adminResponse.resetPasswordExpire;

    // Add virtual fields
    adminResponse.fullName = admin.fullName;
    adminResponse.initials = admin.initials;

   // Revalidate paths
    revalidatePath('/admin');

    return {
      success: true,
      data: adminResponse,
      token,
      successCallback: () => {
        console.log('Registration successful, resetting rate limit counter');
      },
    };

  } catch (error) {
    console.error('Admin registration error:', error);

    if (error.name === 'ZodError') {
      return {
        success: false,
        error: error.errors.map(err => err.message).join(', ')
      };
    }

    return {
      success: false,
      error: error.message || 'Error registering admin'
    };
  }
}

/**
 * Login admin
 * @param {string} email - Admin's email
 * @param {string} password - Admin's password
 * @returns {Promise<{success: boolean, error?: string, data?: Object, token?: string}>}
 */
export async function loginAdmin(email, password) {
  try {
    // Connect to database
    await connectDB();

    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return {
        success: false,
        error: 'Admin account not found'
      };
    }

    // Check account status
    if (admin.accountStatus !== 'active') {
      return {
        success: false,
        error: 'Account is inactive'
      };
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return {
        success: false,
        error: 'Invalid email or password'
      };
    }

    // Update last login
    admin.lastLogin = new Date();
    await admin.save();

    // Send login email notification
    await sendLoginEmail(admin);

    // Check if 2FA is enabled
    if (admin.twoFactorEnabled) {
      // Generate temporary token for 2FA verification
      const tempToken = jwt.sign(
        { id: admin._id, require2FA: true },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '5m' } // Short-lived token
      );

      return {
        success: true,
        require2FA: true,
        adminId: admin._id,
        tempToken
      };
    }

    // If 2FA not enabled, generate normal token
    const token = jwt.sign(
      { 
        id: admin._id, 
        email: admin.email, 
        username: admin.username, 
        role: admin.role,
        twoFactorVerified: false 
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    // Remove sensitive data from response
    const adminResponse = admin.toObject();
    delete adminResponse.password;
    delete adminResponse.resetPasswordToken;
    delete adminResponse.resetPasswordExpire;
    delete adminResponse.twoFactorSecret;
    delete adminResponse.twoFactorTempSecret;
    delete adminResponse.backupCodes;

    // Add virtual fields to response
    adminResponse.fullName = admin.fullName;
    adminResponse.initials = admin.initials;

    return {
      success: true,
      data: adminResponse,
      token
    };

  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      error: 'Error logging in'
    };
  }
}
