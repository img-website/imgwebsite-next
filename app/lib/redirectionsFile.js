import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'redirections.json');

export async function readRedirections() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') return [];
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
