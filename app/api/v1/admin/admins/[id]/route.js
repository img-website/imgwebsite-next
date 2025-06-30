import { NextResponse } from 'next/server';
import { ensurePermission } from '@/lib/rbac';
import {
  readAdminsWithNotice,
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
  const { admins, wasCreated } = await readAdminsWithNotice();
  const user = admins.find((a) => a.id === params.id);
  if (!user)
    return NextResponse.json(
      { success: false, error: 'Admin not found' },
      { status: 404 }
    );
  return NextResponse.json({
    success: true,
    data: user,
    ...(wasCreated && {
      notice: 'Admins JSON file was missing and has been recreated.',
    }),
  });
}

export async function DELETE(req, { params }) {
  const admin = await ensurePermission(req, 'admins', 'delete');
  if (!admin)
    return NextResponse.json(
      { success: false, error: 'Permission denied' },
      { status: 403 }
    );
  await connectDB();
  const doc = await Admin.findById(params.id);
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
  const admin = await ensurePermission(req, 'admins', 'edit');
  if (!admin)
    return NextResponse.json(
      { success: false, error: 'Permission denied' },
      { status: 403 }
    );
  const formData = await req.formData();
  const result = await updateAdmin(params.id, formData);
  if (result.success) {
    await syncAdminsFromDB();
  }
  return NextResponse.json(result, { status: result.success ? 200 : 400 });
}
