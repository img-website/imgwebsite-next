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
  const name = body.name?.trim();
  if (!name) {
    return NextResponse.json({ success: false, error: 'Name required' }, { status: 400 });
  }
  const permissions = body.permissions || {};
  const hasPerm = Object.values(permissions).some((m) => Object.values(m || {}).some(Boolean));
  if (!hasPerm) {
    return NextResponse.json({ success: false, error: 'Select at least one permission' }, { status: 400 });
  }
  const existing = await Department.findOne({ name });
  if (existing) {
    return NextResponse.json({ success: false, error: 'Department already exists' }, { status: 400 });
  }
  const dept = await Department.create({ name, permissions });
  return NextResponse.json({ success: true, data: dept }, { status: 201 });
}
