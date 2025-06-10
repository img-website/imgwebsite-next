import { NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import { sendPasswordResetEmail } from '@/app/lib/mail';
import { passwordResetLimiter } from '@/app/middleware/rateLimiter';
import { z } from "zod";

// Zod schema for validation
const forgotPasswordSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
});

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

    const body = await req.json();

    try {
      forgotPasswordSchema.parse(body);
    } catch (error) {
      console.log(error)
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
