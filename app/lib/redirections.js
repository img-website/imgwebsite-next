let cache = [];
let lastFetch = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getRedirections(origin) {
  if (Date.now() - lastFetch > CACHE_DURATION) {
    try {
      const res = await fetch(`${origin}/api/v1/admin/redirections`);
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
