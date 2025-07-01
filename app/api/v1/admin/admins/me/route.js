import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { extractToken, verifyToken } from '@/app/lib/auth';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import mongoose from 'mongoose';

export async function GET(req) {
  let token = extractToken(req.headers);
  if (!token) {
    const cookieStore = cookies();
    token = cookieStore.get('token')?.value || null;
  }
  if (!token) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }
  const decoded = verifyToken(token);
  if (!decoded) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }
  await connectDB();
  const agg = await Admin.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(decoded.id) } },
    {
      $lookup: {
        from: 'departments',
        localField: 'department',
        foreignField: '_id',
        as: 'department'
      }
    },
    { $unwind: { path: '$department', preserveNullAndEmptyArrays: true } }
  ]);
  const doc = agg[0];
  if (!doc) {
    return NextResponse.json({ success: false, error: 'Admin not found' }, { status: 404 });
  }
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
