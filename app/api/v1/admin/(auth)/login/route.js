import { NextResponse } from 'next/server';
import { loginAdmin } from '@/app/actions/admin';
import { rateLimit } from '@/app/middleware/rateLimiter';

/**
 * @route POST /api/v1/admin/login
 * @desc Login admin
 * @access Public
 */
async function handler(req, ip, failedLoginAttempts, lockoutDuration, failedAttempts) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { success: false, error: 'Email and password are required' },
      { status: 400 }
    );
  }

  const result = await loginAdmin(email, password);

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

    return NextResponse.json(
      { success: false, error: result.error },
      { status: 400 }
    );
  }

  // Clear failed login attempts on successful login
  failedLoginAttempts.delete(ip);

  const json = {
    success: true,
    message: 'Login successful',
    data: result.data,
    token: result.token
  };
  const response = NextResponse.json(json, { status: 200 });
  const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days
  const options = { maxAge: COOKIE_MAX_AGE, path: '/' };
  response.cookies.set('token', result.token, options);
  response.cookies.set('userEmail', result.data.email, options);
  response.cookies.set('userRole', result.data.role, options);
  const permStr = Buffer.from(JSON.stringify(result.data.permissions || {})).toString('base64');
  response.cookies.set('userPermissions', permStr, options);
  if (result.data.permissionsUpdatedAt) {
    response.cookies.set('permissionsStamp', result.data.permissionsUpdatedAt, options);
  }
  return response;
}

export async function POST(req) {
  try {
    return rateLimit(req, handler);
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Error logging in'
      },
      { status: 500 }
    );
  }
}
