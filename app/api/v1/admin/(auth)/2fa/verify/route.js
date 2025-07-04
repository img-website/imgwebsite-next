import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import { verifyToken, verifyBackupCode } from '@/app/lib/2fa';
import jwt from 'jsonwebtoken';

/**
 * @route POST /api/v1/admin/2fa/verify
 * @desc Verify 2FA token
 * @access Public
 */
export async function POST(req) {
  try {
    const { adminId, token, isBackupCode = false } = await req.json();

    await connectDB();
    
    // Find admin with 2FA secret
    const admin = await Admin.findById(adminId).select('+twoFactorSecret');
    if (!admin || !admin.twoFactorEnabled) {
      return NextResponse.json(
        { success: false, error: 'Invalid admin or 2FA not enabled' },
        { status: 400 }
      );
    }

    let isValid = false;

    if (isBackupCode) {
      // Verify backup code
      isValid = verifyBackupCode(admin, token);
      if (isValid) {
        await admin.save(); // Save the used backup code status
      }
    } else {
      // Verify TOTP token
      isValid = verifyToken(admin.twoFactorSecret, token);
    }

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid verification code' },
        { status: 400 }
      );
    }

    // Generate new JWT token with 2FA verified
    const jwtToken = jwt.sign(
      { 
        id: admin._id, 
        email: admin.email, 
        username: admin.username, 
        role: admin.role,
        twoFactorVerified: true 
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '30d' }
    );

    return NextResponse.json({
      success: true,
      message: '2FA verification successful',
      token: jwtToken
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error verifying 2FA' },
      { status: 500 }
    );
  }
} 