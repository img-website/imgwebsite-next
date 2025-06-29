import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import { verifyToken, extractToken, generateToken } from '@/app/lib/auth';

export async function GET(request) {
  try {
    const token = extractToken(request.headers);
    if (!token) return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    const decoded = verifyToken(token);
    if (!decoded) return NextResponse.json({ success: false, error: 'Invalid token' }, { status: 401 });
    await connectDB();
    const admin = await Admin.findById(decoded.id).select('permissions');
    if (!admin) return NextResponse.json({ success: false, error: 'Admin not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: admin.permissions });
  } catch (error) {
    console.error('Fetch permissions error:', error);
    return NextResponse.json({ success: false, error: 'Error fetching permissions' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const token = extractToken(request.headers);
    if (!token) return NextResponse.json({ success: false, error: 'Authentication required' }, { status: 401 });
    const decoded = verifyToken(token);
    if (!decoded) return NextResponse.json({ success: false, error: 'Invalid token' }, { status: 401 });
    const body = await request.json();
    const permissions = Array.isArray(body.permissions) ? body.permissions : [];
    await connectDB();
    const admin = await Admin.findById(decoded.id);
    if (!admin) return NextResponse.json({ success: false, error: 'Admin not found' }, { status: 404 });
    admin.permissions = permissions;
    await admin.save();

    const newToken = generateToken({ id: admin._id, email: admin.email, username: admin.username, role: admin.role, permissions: admin.permissions });
    return NextResponse.json({ success: true, data: admin.permissions, token: newToken });
  } catch (error) {
    console.error('Update permissions error:', error);
    return NextResponse.json({ success: false, error: 'Error updating permissions' }, { status: 500 });
  }
}
