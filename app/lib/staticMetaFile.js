import { promises as fs } from 'fs';
import path from 'path';
import connectDB from '@/app/lib/db';
import StaticMeta from '@/app/models/StaticMeta';

export const DATA_FILE = path.join(process.cwd(), 'data', 'staticMeta.json');

export async function ensureStaticMetaFile() {
  try {
    await fs.access(DATA_FILE);
    return false;
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
      await fs.writeFile(DATA_FILE, '{}', 'utf8');
      return true;
    }
    throw err;
  }
}

export async function readStaticMeta() {
  await ensureStaticMetaFile();
  const data = await fs.readFile(DATA_FILE, 'utf8');
  return JSON.parse(data || '{}');
}

export async function readStaticMetaWithNotice() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return { meta: JSON.parse(data || '{}'), wasCreated: false };
  } catch (err) {
    if (err.code === 'ENOENT') {
      const { meta } = await syncStaticMetaFromDB();
      return { meta, wasCreated: true };
    }
    throw err;
  }
}

export async function writeStaticMeta(meta) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(meta, null, 2), 'utf8');
}

export async function syncStaticMetaFromDB() {
  await connectDB();
  const doc = await StaticMeta.findOne().lean();
  const wasCreated = await ensureStaticMetaFile();
  if (doc) {
    const meta = {
      ...doc,
      _id: doc._id.toString(),
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString(),
    };
    await writeStaticMeta(meta);
    return { meta, wasCreated };
  }
  await writeStaticMeta({});
  return { meta: null, wasCreated };
}
