import { NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import bcrypt from 'bcryptjs';
import { z } from "zod";
import { rateLimit } from '@/app/middleware/rateLimiter';

// Zod schema for validation
const resetPasswordSchema = z.object({
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  token: z.string().min(32, { message: "Invalid token" }),
});

/**
 * @route POST /api/v1/admin/reset-password
 * @desc Reset admin password
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
    resetPasswordSchema.parse(body);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid data' },
      { status: 400 }
    );
  }

  const { password, token } = body;

  // Connect to database
  await connectDB();

  // Hash the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');

  // Find admin with reset token and within expiry time
  const admin = await Admin.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: { $gt: Date.now() }
  });

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
      { success: false, error: 'Invalid or expired token' },
      { status: 400 }
    );
  }

  // Hash the new password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Update admin password and reset token fields
  admin.password = hashedPassword;
  admin.resetPasswordToken = undefined;
  admin.resetPasswordExpire = undefined;
  await admin.save();

  // Clear failed login attempts on successful password reset
  failedLoginAttempts.delete(ip);

  return NextResponse.json(
    {
      success: true,
      message: 'Password reset successfully'
    },
    { status: 200 }
  );
}

export async function POST(req) {
  try {
    return rateLimit(req, handler);
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
