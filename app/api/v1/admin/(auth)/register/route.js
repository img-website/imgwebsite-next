import { NextResponse } from 'next/server';
import { registerAdmin } from '@/app/actions/admin';
import { registerLimiter } from '@/app/middleware/rateLimiter';

/**
 * @route POST /api/v1/admin/register
 * @desc Register a new admin
 * @access Public
 * @param {string} firstName - Admin's first name
 * @param {string} lastName - Admin's last name
 * @param {string} username - Admin's username
 * @param {string} email - Admin's email
 * @param {string} password - Admin's password
 * @param {string} mobileNumber - Admin's mobile number
 * @param {File} profileImage - Admin's profile image file
 */

export async function POST(req) {
  try {
    // Check rate limit
    const rateLimitResult = await registerLimiter(req);
    if (rateLimitResult) return rateLimitResult;

    const formData = await req.formData();
    const result = await registerAdmin(formData,req);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }
    

    return NextResponse.json(
      {
        success: true,
        message: 'Admin registered successfully',
        data: result.data,
        token: result.token
      },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Error registering admin'
      },
      { status: 500 }
    );
  }
}
