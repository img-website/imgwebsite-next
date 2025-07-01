import { getRedis, REDIS_ENABLED } from './redis';
import connectDB from '@/app/lib/db';
import Redirection from '@/app/models/Redirection';

const KEY = 'redirections';

export async function ensureRedirectionsFile() {
  if (!REDIS_ENABLED) return false;
  const redis = getRedis();
  const exists = await redis.exists(KEY);
  return !exists;
}

export async function readRedirections() {
  if (!REDIS_ENABLED) {
    const { data } = await syncRedirectionsFromDB();
    return data;
  }
  const redis = getRedis();
  const data = await redis.get(KEY);
  if (data) {
    try {
      return JSON.parse(data);
    } catch {
      const { data: list } = await syncRedirectionsFromDB();
      return list;
    }
  }
  const { data: list } = await syncRedirectionsFromDB();
  return list;
}

export async function readRedirectionsWithNotice() {
  if (!REDIS_ENABLED) {
    const { data } = await syncRedirectionsFromDB();
    return { redirections: data, wasCreated: false };
  }
  const redis = getRedis();
  const data = await redis.get(KEY);
  if (data) {
    try {
      return { redirections: JSON.parse(data), wasCreated: false };
    } catch {
      const { data: list } = await syncRedirectionsFromDB();
      return { redirections: list, wasCreated: true };
    }
  }
  const { data: list } = await syncRedirectionsFromDB();
  return { redirections: list, wasCreated: true };
}

export async function writeRedirections(redirections) {
  if (!REDIS_ENABLED) return;
  const redis = getRedis();
  await redis.set(KEY, JSON.stringify(redirections));
}

export async function addRedirection(redirection) {
  const list = await readRedirections();
  list.unshift(redirection);
  await writeRedirections(list);
  return redirection;
}

export async function updateRedirection(id, data) {
  const list = await readRedirections();
  const idx = list.findIndex(r => r.id === id);
  if (idx === -1) return null;
  list[idx] = { ...list[idx], ...data, updatedAt: new Date().toISOString() };
  await writeRedirections(list);
  return list[idx];
}

export async function deleteRedirection(id) {
  const list = await readRedirections();
  const idx = list.findIndex(r => r.id === id);
  if (idx === -1) return null;
  const [removed] = list.splice(idx, 1);
  await writeRedirections(list);
  return removed;
}

export async function syncRedirectionsFromDB() {
  await connectDB();
  const docs = await Redirection.find({}).sort({ createdAt: -1 }).lean();
  const data = docs.map(doc => ({
    id: doc._id.toString(),
    from: doc.from,
    to: doc.to,
    methodCode: doc.methodCode,
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  }));
  let wasCreated = false;
  if (REDIS_ENABLED) {
    wasCreated = await ensureRedirectionsFile();
    await writeRedirections(data);
  }
  return { data, wasCreated };
}
