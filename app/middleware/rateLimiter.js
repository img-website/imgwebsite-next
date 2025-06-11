import { NextResponse } from 'next/server';

const failedLoginAttempts = new Map();
const failedAttempts = parseInt(process.env.FAILED_LOGIN_ATTEMPTS || '10');
const lockoutDurationMinutes = parseInt(process.env.LOCK_OUT_DURATION || '10');
const lockoutDuration = lockoutDurationMinutes * 60 * 1000; // Convert to milliseconds

export function rateLimit(req, handler) {
  if (process.env.RATE_LIMIT_ENABLED === 'false') {
    // Disable rate limiting if RATE_LIMIT_ENABLED is false
    const ip = req.headers.get('x-forwarded-for') || req.socket?.remoteAddress || 'unknown';
    return handler(req, ip, failedLoginAttempts, lockoutDuration, failedAttempts);
  }

  const ip = req.headers.get('x-forwarded-for') || req.socket?.remoteAddress || 'unknown';

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

  return handler(req, ip, failedLoginAttempts, lockoutDuration, failedAttempts);
}
