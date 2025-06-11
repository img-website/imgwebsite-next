import { NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import { sendPasswordResetEmail } from '@/app/lib/mail';
import { rateLimit } from '@/app/middleware/rateLimiter';
import { z } from "zod";

// Zod schema for validation
const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

/**
 * @route POST /api/v1/admin/forgot-password
 * @desc Send password reset email
 * @access Public
 */
async function handler(req, ip, failedLoginAttempts, lockoutDuration, failedAttempts) {
  // Check if IP is locked out
  const lockoutTime = failedLoginAttempts.get(ip)?.lockoutUntil;
  if (lockoutTime && lockoutTime > Date.now()) {
    const remainingTime = Math.ceil((lockoutTime - Date.now()) / 60000);
    return NextResponse.json(
      {
        success: false,
        error: `Too many failed attempts. Please try again in ${remainingTime} minutes.`
      },
      { status: 429 }
    );
  }

  const body = await req.json();

  try {
    forgotPasswordSchema.parse(body);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid email' },
      { status: 400 }
    );
  }

  const { email } = body;

  // Connect to database
  await connectDB();

  // Find admin by email
  const admin = await Admin.findOne({ email });
  if (!admin) {
    // Increment failed login attempts if no account found
    const attempts = (failedLoginAttempts.get(ip)?.attempts || 0) + 1;
    failedLoginAttempts.set(ip, { attempts });

    if (attempts >= failedAttempts) {
      // Lockout IP for 10 minutes
      failedLoginAttempts.set(ip, {
        attempts,
        lockoutUntil: Date.now() + lockoutDuration
      });
    }
    return NextResponse.json(
      { success: false, error: 'No account found with this email' },
      { status: 404 }
    );
  }

  // Generate reset token
  const resetToken = crypto.randomBytes(32).toString('hex');
  const hashedToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Save reset token to admin
  admin.resetPasswordToken = hashedToken;
  admin.resetPasswordExpire = Date.now() + 3600000; // 1 hour
  await admin.save();

  // Send password reset email
  const emailResult = await sendPasswordResetEmail(admin, resetToken);

  if (emailResult.success) {
    // Clear failed login attempts on successful forgot password request
    failedLoginAttempts.delete(ip);
    return NextResponse.json(
      {
        success: true,
        message: 'Password reset email sent'
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      {
        success: false,
        error: emailResult.error
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    return rateLimit(req, handler);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Error sending password reset email'
      },
      { status: 500 }
    );
  }
}
