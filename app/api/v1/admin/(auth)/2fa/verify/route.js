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

    const json = {
      success: true,
      message: '2FA verification successful',
      token: jwtToken
    };
    const response = NextResponse.json(json);
    const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days
    const options = {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: COOKIE_MAX_AGE,
      expires: new Date(Date.now() + COOKIE_MAX_AGE * 1000),
      path: '/'
    };
    response.cookies.set('token', jwtToken, options);
    response.cookies.set('userEmail', admin.email, options);
    response.cookies.set('userRole', admin.role, options);
    const permStr = Buffer.from(JSON.stringify(admin.permissions || {})).toString('base64');
    response.cookies.set('userPermissions', permStr, options);
    if (admin.permissionsUpdatedAt) {
      response.cookies.set('permissionsStamp', admin.permissionsUpdatedAt.toISOString(), options);
    }
    return response;

  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error verifying 2FA' },
      { status: 500 }
    );
  }
} 