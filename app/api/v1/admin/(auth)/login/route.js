import { NextResponse } from 'next/server';
import { loginAdmin } from '@/app/actions/admin';
import { loginLimiter } from '@/app/middleware/rateLimiter';

/**
 * @route POST /api/v1/admin/login
 * @desc Login admin
 * @access Public
 * @param {string} email - Admin's email
 * @param {string} password - Admin's password
 */

export async function POST(req) {
  try {
    // Check rate limit
    const rateLimitResult = await loginLimiter(req);
    if (rateLimitResult) return rateLimitResult;

    const body = await req.json();
    const { email, password } = body;

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const result = await loginAdmin(email, password);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        data: result.data,
        token: result.token
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Error logging in'
      },
      { status: 500 }
    );
  }
} 