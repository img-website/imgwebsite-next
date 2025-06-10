import { NextResponse } from 'next/server';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import { sendPasswordResetConfirmationEmail } from '@/app/lib/mail';
import { passwordResetLimiter } from '@/app/middleware/rateLimiter';

/**
 * @route POST /api/v1/admin/reset-password
 * @desc Reset admin password using token
 * @access Public
 * @param {string} token - Reset password token
 * @param {string} password - New password
 */
export async function POST(req) {
  try {
    // Check rate limit
    const rateLimitResult = await passwordResetLimiter(req);
    if (rateLimitResult?.status === 429) return rateLimitResult;

    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json(
        { success: false, error: 'Token and password are required' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Hash token
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    // Find admin by token and check if token is expired
    const admin = await Admin.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() }
    });

    if (!admin) {
      return NextResponse.json(
        { success: false, error: 'Invalid or expired reset token' },
        { status: 400 }
      );
    }

    // Validate password
    if (password.length < 6) {
      return NextResponse.json(
        { success: false, error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Update admin password and clear reset token
    admin.password = hashedPassword;
    admin.resetPasswordToken = undefined;
    admin.resetPasswordExpire = undefined;
    await admin.save();

    // Send password reset confirmation email
    await sendPasswordResetConfirmationEmail(admin);

    return NextResponse.json(
      {
        success: true,
        message: 'Password reset successful'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Error resetting password'
      },
      { status: 500 }
    );
  }
} 