import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import '@/app/models/Department';

export async function readAdmins() {
  const { admins } = await syncAdminsFromDB();
  return admins;
}

export async function readAdminsWithNotice() {
  const { admins } = await syncAdminsFromDB();
  return { admins, wasCreated: false };
}

export async function syncAdminsFromDB() {
  await connectDB();
  const mongoose = await import('mongoose');
  const docs = await Admin.aggregate([
    {
      $lookup: {
        from: 'departments',
        localField: 'department',
        foreignField: '_id',
        as: 'department',
      },
    },
    { $unwind: { path: '$department', preserveNullAndEmptyArrays: true } },
  ]);
  const admins = docs.map((doc) => ({
    id: doc._id.toString(),
    firstName: doc.firstName || '',
    lastName: doc.lastName || '',
    username: doc.username || '',
    email: doc.email,
    mobileNumber: doc.mobileNumber || '',
    profileImage: doc.profileImage || null,
    role: doc.role,
    department: doc.department ? doc.department.name : null,
    departmentId: doc.department ? doc.department._id.toString() : null,
    permissions: doc.permissions || {},
    permissionsUpdatedAt: doc.permissionsUpdatedAt ? doc.permissionsUpdatedAt.toISOString() : new Date().toISOString(),
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  }));
  return { admins, wasCreated: false };
}
