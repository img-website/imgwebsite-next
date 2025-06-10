import { NextResponse } from 'next/server';

/**
 * @route GET /api/v1/admin/logout
 * @desc Logout the admin/user and clear cookies
 * @access Public
 */

export async function GET() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully"
  });

  // Clear cookies
  response.cookies.set("token", "", { maxAge: -1, path: "/" });
  response.cookies.set("userEmail", "", { maxAge: -1, path: "/" });
  response.cookies.set("userRole", "", { maxAge: -1, path: "/" });

  return response;
}
