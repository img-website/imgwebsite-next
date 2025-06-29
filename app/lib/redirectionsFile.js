import { promises as fs } from 'fs';
import path from 'path';
import connectDB from '@/app/lib/db';
import Redirection from '@/app/models/Redirection';

export const DATA_FILE = path.join(process.cwd(), 'data', 'redirections.json');

export async function ensureRedirectionsFile() {
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

export async function readRedirections() {
  await ensureRedirectionsFile();
  const data = await fs.readFile(DATA_FILE, 'utf8');
  return JSON.parse(data);
}

export async function readRedirectionsWithNotice() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return { redirections: JSON.parse(data), wasCreated: false };
  } catch (err) {
    if (err.code === 'ENOENT') {
      const { data } = await syncRedirectionsFromDB();
      return { redirections: data, wasCreated: true };
    }
    throw err;
  }
}

export async function writeRedirections(redirections) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(redirections, null, 2), 'utf8');
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
  const wasCreated = await ensureRedirectionsFile();
  await writeRedirections(data);
  return { data, wasCreated };
}
