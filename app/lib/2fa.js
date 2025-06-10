import speakeasy from 'speakeasy';
import QRCode from 'qrcode';
import crypto from 'crypto';

/**
 * Generate a new secret for 2FA setup
 */
export function generateSecret(email) {
  const secret = speakeasy.generateSecret({
    name: `IMG Admin Panel:${email}`
  });
  return {
    secret: secret.base32,
    otpauth_url: secret.otpauth_url
  };
}

/**
 * Generate QR code for 2FA setup
 */
export async function generateQRCode(otpauth_url) {
  try {
    const qrCodeUrl = await QRCode.toDataURL(otpauth_url);
    return qrCodeUrl;
  } catch (error) {
    throw error;
  }
}

/**
 * Verify 2FA token
 */
export function verifyToken(secret, token) {
  try {
    return speakeasy.totp.verify({
      secret: secret,
      encoding: 'base32',
      token: token,
      window: 1 // Allow 30 seconds clock skew
    });
  } catch (error) {
    return false;
  }
}

/**
 * Generate backup codes
 */
export function generateBackupCodes() {
  const codes = [];
  for (let i = 0; i < 10; i++) {
    const code = crypto.randomBytes(4).toString('hex').toUpperCase();
    codes.push({
      code: code,
      used: false
    });
  }
  return codes;
}

/**
 * Verify backup code
 */
export function verifyBackupCode(admin, code) {
  const backupCode = admin.backupCodes.find(bc => bc.code === code && !bc.used);
  if (backupCode) {
    backupCode.used = true;
    return true;
  }
  return false;
} 