import { NextResponse } from 'next/server';
import { registerAdmin } from '@/app/actions/admin';
import { rateLimit } from '@/app/middleware/rateLimiter';
import { extractToken, verifyToken } from '@/app/lib/auth';
import { syncAdminsFromDB } from '@/app/lib/adminsFile';

/**
 * @route POST /api/v1/admin/register
 * @desc Register a new admin
 * @access Private (SuperAdmin only)
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

  const formData = await req.formData();
  const result = await registerAdmin(formData, req);

  if (!result.success) {
    // Increment failed login attempts
    const attempts = (failedLoginAttempts.get(ip)?.attempts || 0) + 1;
    failedLoginAttempts.set(ip, { attempts });

    if (attempts >= failedAttempts) {
      // Lockout IP for 10 minutes
      failedLoginAttempts.set(ip, {
        attempts,
        lockoutUntil: Date.now() + lockoutDuration
      });
    }
  } else {
    // Clear failed login attempts on successful registration
    failedLoginAttempts.delete(ip);
    await syncAdminsFromDB();
  }

  return NextResponse.json(result, { status: result.success ? 201 : 400 });
}

export async function POST(req) {
  try {
    const token = extractToken(req.headers);
    const decoded = token && verifyToken(token);
    if (!decoded || decoded.role !== 'superadmin') {
      return NextResponse.json(
        { success: false, error: 'SuperAdmin access required' },
        { status: 403 }
      );
    }
    // Apply rate limit
    return rateLimit(req, handler);
  } catch (error) {
    console.error('Admin registration error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Error registering admin'
      },
      { status: 500 }
    );
  }
}
