import { NextResponse } from 'next/server';
import { ensurePermission } from '@/lib/rbac';
import { readAdminsWithNotice } from '@/app/lib/adminsFile';

export async function GET(req) {
  const admin = await ensurePermission(req, 'admins', 'read');
  if (!admin)
    return NextResponse.json(
      { success: false, error: 'Permission denied' },
      { status: 403 }
    );
  const { admins, wasCreated } = await readAdminsWithNotice();
  return NextResponse.json({
    success: true,
    data: admins,
    ...(wasCreated && {
      notice: 'Admins JSON file was missing and has been recreated.',
    }),
  });
}
