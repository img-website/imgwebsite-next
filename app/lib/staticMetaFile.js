import { getRedis, REDIS_ENABLED } from './redis';
import connectDB from '@/app/lib/db';
import StaticMeta from '@/app/models/StaticMeta';

const KEY = 'staticMeta';

export async function ensureStaticMetaFile() {
  if (!REDIS_ENABLED) return false;
  const redis = getRedis();
  const exists = await redis.exists(KEY);
  return !exists;
}

export async function readStaticMeta() {
  if (!REDIS_ENABLED) {
    const { meta } = await syncStaticMetaFromDB();
    return meta;
  }
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
  if (!REDIS_ENABLED) {
    const { meta } = await syncStaticMetaFromDB();
    return { meta, wasCreated: false };
  }
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
  if (!REDIS_ENABLED) return;
  const redis = getRedis();
  await redis.set(KEY, JSON.stringify(meta));
}

export async function syncStaticMetaFromDB() {
  await connectDB();
  const doc = await StaticMeta.findOne().lean();
  let wasCreated = false;
  if (REDIS_ENABLED) {
    wasCreated = await ensureStaticMetaFile();
  }
  if (doc) {
    const meta = {
      ...doc,
      _id: doc._id.toString(),
      createdAt: doc.createdAt.toISOString(),
      updatedAt: doc.updatedAt.toISOString(),
    };
    if (REDIS_ENABLED) {
      await writeStaticMeta(meta);
    }
    return { meta, wasCreated };
  }
  if (REDIS_ENABLED) {
    await writeStaticMeta({});
  }
  return { meta: null, wasCreated };
}
