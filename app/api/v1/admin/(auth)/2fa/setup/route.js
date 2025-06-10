import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import { generateSecret, generateQRCode, verifyToken, generateBackupCodes } from '@/app/lib/2fa';

/**
 * @route POST /api/v1/admin/2fa/setup
 * @desc Start 2FA setup process
 * @access Private (requires authentication)
 */
export async function POST(req) {
  try {
    const { adminId } = await req.json();

    await connectDB();
    
    // Find admin
    const admin = await Admin.findById(adminId);
    console.log('Found admin:', admin ? 'Yes' : 'No');
    if (!admin) {
      return NextResponse.json(
        { success: false, error: 'Admin not found' },
        { status: 404 }
      );
    }

    // Generate secret
    const { secret, otpauth_url } = generateSecret(admin.email);
    console.log('Generated secret:', secret ? 'Yes' : 'No');
    
    // Generate QR code
    const qrCode = await generateQRCode(otpauth_url);
    console.log('Generated QR code:', qrCode ? 'Yes' : 'No');

    // Save temporary secret
    admin.twoFactorTempSecret = secret;
    admin.twoFactorPendingSetup = true;
    await admin.save();
    console.log('Saved to database. twoFactorPendingSetup:', admin.twoFactorPendingSetup);

    // Verify the save
    const verifyAdmin = await Admin.findById(adminId);
    console.log('Verification - twoFactorPendingSetup:', verifyAdmin.twoFactorPendingSetup);

    return NextResponse.json({
      success: true,
      data: {
        secret,
        qrCode
      }
    });

  } catch (error) {
    console.error('2FA setup error:', error);
    return NextResponse.json(
      { success: false, error: 'Error setting up 2FA' },
      { status: 500 }
    );
  }
}

/**
 * @route PUT /api/v1/admin/2fa/setup
 * @desc Verify and complete 2FA setup
 * @access Private (requires authentication)
 */
export async function PUT(req) {
  try {
    const { adminId, token } = await req.json();

    await connectDB();
    
    // Find admin
    const admin = await Admin.findById(adminId).select('+twoFactorTempSecret');
    if (!admin || !admin.twoFactorPendingSetup) {
      return NextResponse.json(
        { success: false, error: 'Invalid setup state' },
        { status: 400 }
      );
    }

    // Verify token
    const isValid = verifyToken(admin.twoFactorTempSecret, token);
    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid verification code' },
        { status: 400 }
      );
    }

    // Generate backup codes
    const backupCodes = generateBackupCodes();

    // Enable 2FA
    admin.twoFactorSecret = admin.twoFactorTempSecret;
    admin.twoFactorEnabled = true;
    admin.twoFactorPendingSetup = false;
    admin.twoFactorTempSecret = undefined;
    admin.backupCodes = backupCodes;
    await admin.save();

    return NextResponse.json({
      success: true,
      message: '2FA enabled successfully',
      data: {
        backupCodes: backupCodes.map(bc => bc.code)
      }
    });

  } catch (error) {
    console.error('2FA verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Error verifying 2FA setup' },
      { status: 500 }
    );
  }
} 