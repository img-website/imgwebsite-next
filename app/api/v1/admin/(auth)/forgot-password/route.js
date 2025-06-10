import { NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import { sendPasswordResetEmail } from '@/app/lib/mail';
import { passwordResetLimiter } from '@/app/middleware/rateLimiter';

/**
 * @route POST /api/v1/admin/forgot-password
 * @desc Send password reset email
 * @access Public
 * @param {string} email - Admin's email
 */
export async function POST(req) {
  try {
    // Check rate limit
    const rateLimitResult = await passwordResetLimiter(req);
    if (rateLimitResult?.status === 429) return rateLimitResult;

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
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
    await sendPasswordResetEmail(admin, resetToken);

    return NextResponse.json(
      {
        success: true,
        message: 'Password reset email sent'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Error sending password reset email'
      },
      { status: 500 }
    );
  }
} 