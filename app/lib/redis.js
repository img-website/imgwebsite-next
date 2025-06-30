import { createClient } from 'redis';

const REDIS_URL = process.env.REDIS_URL;

if (!REDIS_URL) {
  throw new Error('REDIS_URL env variable is not defined');
}

let client;

export function getRedis() {
  if (!client) {
    client = createClient({ url: REDIS_URL });
    client.on('error', (err) => console.error('Redis Client Error', err));
    client.connect().catch((err) => console.error('Redis connect error', err));
  }
  return client;
}
