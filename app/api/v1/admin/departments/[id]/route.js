import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Department from '@/app/models/Department';
import Admin from '@/app/models/Admin';
import { ensurePermission } from '@/lib/rbac';
import { syncAdminsFromDB } from '@/app/lib/adminsFile';

export async function GET(req, { params }) {
  const { id } = await params;
  const admin = await ensurePermission(req, 'departments', 'read');
  if (!admin) return NextResponse.json({ success: false, error: 'Permission denied' }, { status: 403 });
  await connectDB();
  const dept = await Department.findById(id).lean();
  if (!dept) return NextResponse.json({ success: false, error: 'Department not found' }, { status: 404 });
  return NextResponse.json({ success: true, data: dept });
}

export async function PUT(req, { params }) {
  const { id } = await params;
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
  const existing = await Department.findOne({ name, _id: { $ne: id } });
  if (existing) {
    return NextResponse.json({ success: false, error: 'Department already exists' }, { status: 400 });
  }
  const updated = await Department.findByIdAndUpdate(
    id,
    { name, permissions },
    { new: true }
  );
  if (!updated)
    return NextResponse.json(
      { success: false, error: 'Department not found' },
      { status: 404 }
    );

  // Update permissions for all admins using this department
  await Admin.updateMany(
    { department: id },
    { permissions, permissionsUpdatedAt: new Date(), updatedAt: new Date() }
  );
  await syncAdminsFromDB();

  return NextResponse.json({ success: true, data: updated });
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  const admin = await ensurePermission(req, 'departments', 'delete');
  if (!admin) return NextResponse.json({ success: false, error: 'Permission denied' }, { status: 403 });
  await connectDB();
  const admins = await Admin.find({ department: id }).select('email');
  if (admins.length > 0) {
    return NextResponse.json(
      { success: false, error: 'Department is assigned to admins', data: admins },
      { status: 400 }
    );
  }
  const deleted = await Department.findByIdAndDelete(id);
  if (!deleted) return NextResponse.json({ success: false, error: 'Department not found' }, { status: 404 });
  return NextResponse.json({ success: true });
}
