let cache = [];
let lastFetch = 0;
const CACHE_DURATION = process.env.REDIRECTS_CACHE_DURATION
  ? Number(process.env.REDIRECTS_CACHE_DURATION)
  : 0; // 0 = no cache by default

const FETCH_TIMEOUT = process.env.REDIRECTS_FETCH_TIMEOUT
  ? Number(process.env.REDIRECTS_FETCH_TIMEOUT)
  : 3000; // default 3s timeout

export async function getRedirections(origin) {
  if (Date.now() - lastFetch > CACHE_DURATION) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT);
      const res = await fetch(`${origin}/api/v1/admin/redirections`, {
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (res.ok) {
        const json = await res.json();
        cache = Array.isArray(json.data) ? json.data : [];
        lastFetch = Date.now();
      }
    } catch (err) {
      console.error('Failed to fetch redirections', err);
    }
  }
  return cache;
}

export function clearRedirectionsCache() {
  cache = [];
  lastFetch = 0;
}
