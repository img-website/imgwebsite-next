import { NextResponse } from 'next/server';
import { ensurePermission } from '@/lib/rbac';
import {
  readAdminsWithNotice,
  syncAdminsFromDB,
} from '@/app/lib/adminsFile';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';

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
  const deleted = await Admin.findByIdAndDelete(params.id);
  if (!deleted)
    return NextResponse.json(
      { success: false, error: 'Admin not found' },
      { status: 404 }
    );
  const { wasCreated } = await syncAdminsFromDB();
  return NextResponse.json({
    success: true,
    ...(wasCreated && {
      notice: 'Admins JSON file was missing and has been recreated.',
    }),
  });
}
