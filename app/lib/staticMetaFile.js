import { getRedis } from './redis';
import connectDB from '@/app/lib/db';
import StaticMeta from '@/app/models/StaticMeta';

const KEY = 'staticMeta';

export async function ensureStaticMetaFile() {
  const redis = getRedis();
  const exists = await redis.exists(KEY);
  return !exists;
}

export async function readStaticMeta() {
  const redis = getRedis();
  const data = await redis.get(KEY);
  if (data) {
    try {
      return JSON.parse(data || '{}');
    } catch {
      const { meta } = await syncStaticMetaFromDB();
      return meta;
    }
  }
  const { meta } = await syncStaticMetaFromDB();
  return meta;
}

export async function readStaticMetaWithNotice() {
  const redis = getRedis();
  const data = await redis.get(KEY);
  if (data) {
    try {
      return { meta: JSON.parse(data || '{}'), wasCreated: false };
    } catch {
      const { meta } = await syncStaticMetaFromDB();
      return { meta, wasCreated: true };
    }
  }
  const { meta } = await syncStaticMetaFromDB();
  return { meta, wasCreated: true };
}

export async function writeStaticMeta(meta) {
  const redis = getRedis();
  await redis.set(KEY, JSON.stringify(meta));
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
