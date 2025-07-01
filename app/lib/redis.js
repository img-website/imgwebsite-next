import { createClient } from 'redis';

export const REDIS_ENABLED = process.env.REDIS_ENABLED !== 'false';
const REDIS_URL = process.env.REDIS_URL;

let client;

export function getRedis() {
  if (!REDIS_ENABLED) return null;
  if (!REDIS_URL) {
    throw new Error('REDIS_URL env variable is not defined');
  }
  if (!client) {
    client = createClient({ url: REDIS_URL });
    client.on('error', (err) => console.error('Redis Client Error', err));
    client.connect().catch((err) => console.error('Redis connect error', err));
  }
  return client;
}
