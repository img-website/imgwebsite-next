import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import { ensurePermission } from '@/lib/rbac';

export async function GET(req, { params }) {
  const admin = await ensurePermission(req, 'admins', 'read');
  if (!admin) return NextResponse.json({ success: false, error: 'Permission denied' }, { status: 403 });
  await connectDB();
  const user = await Admin.findById(params.id).populate('department', 'name').lean();
  if (!user) return NextResponse.json({ success: false, error: 'Admin not found' }, { status: 404 });
  return NextResponse.json({ success: true, data: user });
}

export async function DELETE(req, { params }) {
  const admin = await ensurePermission(req, 'admins', 'delete');
  if (!admin) return NextResponse.json({ success: false, error: 'Permission denied' }, { status: 403 });
  await connectDB();
  const deleted = await Admin.findByIdAndDelete(params.id);
  if (!deleted) return NextResponse.json({ success: false, error: 'Admin not found' }, { status: 404 });
  return NextResponse.json({ success: true });
}
