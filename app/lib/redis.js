import { createClient } from 'redis';

export const REDIS_ENABLED = process.env.REDIS_ENABLED !== 'false';
const REDIS_URL = process.env.REDIS_URL;

let client;
let connecting;

export function getRedis() {
  if (!REDIS_ENABLED) return null;
  if (!REDIS_URL) {
    throw new Error('REDIS_URL env variable is not defined');
  }
  if (!client) {
    client = createClient({
      url: REDIS_URL,
      socket: {
        reconnectStrategy: retries => Math.min(retries * 100, 3000)
      }
    });
    client.on('error', (err) => {
      if (err?.code === 'ECONNRESET' || err?.code === 'ENOTFOUND') {
        console.warn('Redis connection error', err.message);
      } else {
        console.error('Redis Client Error', err);
      }
    });
    connecting = client.connect().catch((err) => {
      console.error('Redis connect error', err);
      client = null;
    });
  }
  return client;
}
