import { NextResponse } from 'next/server';
import { ensurePermission } from '@/lib/rbac';
import {
  syncAdminsFromDB,
} from '@/app/lib/adminsFile';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import { updateAdmin } from '@/app/actions/admin';

export async function GET(req, { params }) {
  const admin = await ensurePermission(req, 'admins', 'read');
  if (!admin)
    return NextResponse.json(
      { success: false, error: 'Permission denied' },
      { status: 403 }
    );
  const { id } = await params;
  await connectDB();
  const mongoose = await import('mongoose');
  const docs = await Admin.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(String(id)) } },
    {
      $lookup: {
        from: 'departments',
        localField: 'department',
        foreignField: '_id',
        as: 'department',
      },
    },
    { $unwind: { path: '$department', preserveNullAndEmptyArrays: true } },
    { $limit: 1 },
  ]);
  const doc = docs[0];
  if (!doc)
    return NextResponse.json(
      { success: false, error: 'Admin not found' },
      { status: 404 }
    );
  const data = {
    id: doc._id.toString(),
    firstName: doc.firstName || '',
    lastName: doc.lastName || '',
    username: doc.username || '',
    email: doc.email,
    mobileNumber: doc.mobileNumber || '',
    profileImage: doc.profileImage || null,
    department: doc.department ? doc.department.name : null,
    departmentId: doc.department ? doc.department._id.toString() : null,
    role: doc.role,
    permissions: doc.permissions || {},
    permissionsUpdatedAt: doc.permissionsUpdatedAt?.toISOString(),
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  };
  return NextResponse.json({ success: true, data });
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  const admin = await ensurePermission(req, 'admins', 'delete');
  if (!admin)
    return NextResponse.json(
      { success: false, error: 'Permission denied' },
      { status: 403 }
    );
  await connectDB();
  const doc = await Admin.findById(id);
  if (!doc)
    return NextResponse.json(
      { success: false, error: 'Admin not found' },
      { status: 404 }
    );
  if (doc.role === 'superadmin') {
    return NextResponse.json(
      { success: false, error: 'Cannot delete superadmin' },
      { status: 400 }
    );
  }
  if (!doc.deleted_at) {
    doc.deleted_at = new Date();
    await doc.save();
  }
  const { wasCreated } = await syncAdminsFromDB();
  return NextResponse.json({
    success: true,
    ...(wasCreated && {
      notice: 'Admins JSON file was missing and has been recreated.',
    }),
  });
}

export async function PUT(req, { params }) {
  const { id } = await params;
  const admin = await ensurePermission(req, 'admins', 'edit');
  if (!admin)
    return NextResponse.json(
      { success: false, error: 'Permission denied' },
      { status: 403 }
    );
  const formData = await req.formData();
  const result = await updateAdmin(id, formData);
  if (result.success) {
    await syncAdminsFromDB();
  }
  return NextResponse.json(result, { status: result.success ? 200 : 400 });
}
