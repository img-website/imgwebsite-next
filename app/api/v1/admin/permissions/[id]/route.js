import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import { ensurePermission } from '@/lib/rbac';

export async function GET(req, { params }) {
  const admin = await ensurePermission(req, 'admins', 'read');
  if (!admin) return NextResponse.json({ success: false, error: 'Permission denied' }, { status: 403 });
  await connectDB();
  const user = await Admin.findById(params.id).lean();
  if (!user) return NextResponse.json({ success: false, error: 'Admin not found' }, { status: 404 });
  return NextResponse.json({ success: true, data: user.permissions || {} });
}

export async function PUT(req, { params }) {
  const admin = await ensurePermission(req, 'admins', 'edit');
  if (!admin) return NextResponse.json({ success: false, error: 'Permission denied' }, { status: 403 });
  await connectDB();
  const body = await req.json();
  const updated = await Admin.findByIdAndUpdate(params.id, { permissions: body.permissions }, { new: true });
  if (!updated) return NextResponse.json({ success: false, error: 'Admin not found' }, { status: 404 });
  return NextResponse.json({ success: true, data: updated.permissions });
}
