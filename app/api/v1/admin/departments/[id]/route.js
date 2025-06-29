import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Department from '@/app/models/Department';
import Admin from '@/app/models/Admin';
import { ensurePermission } from '@/lib/rbac';

export async function GET(req, { params }) {
  const admin = await ensurePermission(req, 'departments', 'read');
  if (!admin) return NextResponse.json({ success: false, error: 'Permission denied' }, { status: 403 });
  await connectDB();
  const dept = await Department.findById(params.id).lean();
  if (!dept) return NextResponse.json({ success: false, error: 'Department not found' }, { status: 404 });
  return NextResponse.json({ success: true, data: dept });
}

export async function PUT(req, { params }) {
  const admin = await ensurePermission(req, 'departments', 'edit');
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
  const existing = await Department.findOne({ name, _id: { $ne: params.id } });
  if (existing) {
    return NextResponse.json({ success: false, error: 'Department already exists' }, { status: 400 });
  }
  const updated = await Department.findByIdAndUpdate(params.id, { name, permissions }, { new: true });
  if (!updated) return NextResponse.json({ success: false, error: 'Department not found' }, { status: 404 });
  return NextResponse.json({ success: true, data: updated });
}

export async function DELETE(req, { params }) {
  const admin = await ensurePermission(req, 'departments', 'delete');
  if (!admin) return NextResponse.json({ success: false, error: 'Permission denied' }, { status: 403 });
  await connectDB();
  const inUse = await Admin.countDocuments({ department: params.id });
  if (inUse > 0) {
    return NextResponse.json({ success: false, error: 'Department is assigned to admins' }, { status: 400 });
  }
  const deleted = await Department.findByIdAndDelete(params.id);
  if (!deleted) return NextResponse.json({ success: false, error: 'Department not found' }, { status: 404 });
  return NextResponse.json({ success: true });
}
