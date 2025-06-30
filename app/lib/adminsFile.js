import { getRedis } from './redis';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import '@/app/models/Department';

const KEY = 'admins';

export async function ensureAdminsFile() {
  const redis = getRedis();
  const exists = await redis.exists(KEY);
  return !exists;
}

export async function readAdmins() {
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
  const redis = getRedis();
  await redis.set(KEY, JSON.stringify(admins));
}

export async function syncAdminsFromDB() {
  await connectDB();
  const docs = await Admin.find().populate('department', 'name').lean();
  const admins = docs.map((doc) => ({
    id: doc._id.toString(),
    email: doc.email,
    role: doc.role,
    department: doc.department ? doc.department.name : null,
    departmentId: doc.department ? doc.department._id.toString() : null,
    permissions: doc.permissions || {},
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  }));
  const redis = getRedis();
  const existed = await redis.exists(KEY);
  await writeAdmins(admins);
  return { admins, wasCreated: !existed };
}
