import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Department from '@/app/models/Department';
import { ensurePermission } from '@/lib/rbac';

export async function GET(req) {
  const admin = await ensurePermission(req, 'departments', 'read');
  if (!admin) return NextResponse.json({ success: false, error: 'Permission denied' }, { status: 403 });
  await connectDB();
  const depts = await Department.find().lean();
  return NextResponse.json({ success: true, data: depts });
}

export async function POST(req) {
  const admin = await ensurePermission(req, 'departments', 'write');
  if (!admin) return NextResponse.json({ success: false, error: 'Permission denied' }, { status: 403 });
  await connectDB();
  const body = await req.json();
  const dept = await Department.create({ name: body.name, permissions: body.permissions || {} });
  return NextResponse.json({ success: true, data: dept }, { status: 201 });
}
