import { NextResponse } from 'next/server';
import { extractToken, verifyToken } from '@/app/lib/auth';
import { readAdminsWithNotice } from '@/app/lib/adminsFile';

export async function GET(req) {
  const token = extractToken(req.headers);
  if (!token) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }
  const decoded = verifyToken(token);
  if (!decoded) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }
  const { admins, wasCreated } = await readAdminsWithNotice();
  const admin = admins.find(a => a.id === decoded.id);
  if (!admin) {
    return NextResponse.json({ success: false, error: 'Admin not found' }, { status: 404 });
  }
  return NextResponse.json({ success: true, data: admin, ...(wasCreated && { notice: 'Admins JSON file was missing and has been recreated.' }) });
}
