import { getRedis, REDIS_ENABLED } from './redis';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import '@/app/models/Department';

const KEY = 'admins';

export async function ensureAdminsFile() {
  if (!REDIS_ENABLED) return false;
  const redis = getRedis();
  const exists = await redis.exists(KEY);
  return !exists;
}

export async function readAdmins() {
  if (!REDIS_ENABLED) {
    const { admins } = await syncAdminsFromDB();
    return admins;
  }
  const redis = getRedis();
  const data = await redis.get(KEY);
  if (data) {
    try {
      return JSON.parse(data);
    } catch {
      const { admins } = await syncAdminsFromDB();
      return admins;
    }
  }
  const { admins } = await syncAdminsFromDB();
  return admins;
}

export async function readAdminsWithNotice() {
  if (!REDIS_ENABLED) {
    const { admins } = await syncAdminsFromDB();
    return { admins, wasCreated: false };
  }
  const redis = getRedis();
  const data = await redis.get(KEY);
  if (data) {
    try {
      return { admins: JSON.parse(data), wasCreated: false };
    } catch {
      const { admins } = await syncAdminsFromDB();
      return { admins, wasCreated: true };
    }
  }
  const { admins } = await syncAdminsFromDB();
  return { admins, wasCreated: true };
}

export async function writeAdmins(admins) {
  if (!REDIS_ENABLED) return;
  const redis = getRedis();
  await redis.set(KEY, JSON.stringify(admins));
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
  let wasCreated = false;
  if (REDIS_ENABLED) {
    const redis = getRedis();
    const existed = await redis.exists(KEY);
    await writeAdmins(admins);
    wasCreated = !existed;
  }
  return { admins, wasCreated };
}
