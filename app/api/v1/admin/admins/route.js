import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import { ensurePermission } from '@/lib/rbac';

export async function GET(req) {
  const admin = await ensurePermission(req, 'admins', 'read');
  if (!admin) return NextResponse.json({ success: false, error: 'Permission denied' }, { status: 403 });
  await connectDB();
  const admins = await Admin.find().populate('department', 'name').lean();
  return NextResponse.json({ success: true, data: admins });
}
