import { promises as fs } from 'fs';
import path from 'path';
import connectDB from '@/app/lib/db';
import Admin from '@/app/models/Admin';
import '@/app/models/Department';

export const DATA_FILE = path.join(process.cwd(), 'data', 'admins.json');

export async function ensureAdminsFile() {
  try {
    await fs.access(DATA_FILE);
    return false;
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
      await fs.writeFile(DATA_FILE, '[]', 'utf8');
      return true;
    }
    throw err;
  }
}

export async function readAdmins() {
  await ensureAdminsFile();
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    if (err instanceof SyntaxError) {
      const { admins } = await syncAdminsFromDB();
      return admins;
    }
    throw err;
  }
}

export async function readAdminsWithNotice() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return { admins: JSON.parse(data), wasCreated: false };
  } catch (err) {
    if (err.code === 'ENOENT' || err instanceof SyntaxError) {
      const { admins } = await syncAdminsFromDB();
      return { admins, wasCreated: true };
    }
    throw err;
  }
}

export async function writeAdmins(admins) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(admins, null, 2), 'utf8');
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
  const wasCreated = await ensureAdminsFile();
  await writeAdmins(admins);
  return { admins, wasCreated };
}
