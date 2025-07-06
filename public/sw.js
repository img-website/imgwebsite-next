const CACHE_NAME = 'offline-cache-v2';
const OFFLINE_URL = '/offline?sw=1';
const STATIC_CACHE_URLS = [OFFLINE_URL];

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_CACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(names =>
        Promise.all(names.filter(name => name !== CACHE_NAME).map(name => caches.delete(name)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;

  if (request.url.includes('/_next/static/')) {
    event.respondWith(
      caches.match(request).then(cached => {
        const fetchPromise = fetch(request)
          .then(res => {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
            return res;
          })
          .catch(() => cached);
        return cached || fetchPromise;
      })
    );
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(() => caches.match(OFFLINE_URL)));
  }
});

self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: data.icon || '/android-chrome-192x192.png',
      badge: data.badge || '/favicon-16x16.png',
      vibrate: data.vibrate || [100, 50, 100],
      data: {
        url: data.url || '/',
        ...(data.data || {})
      },
      actions: data.actions,
      tag: data.tag,
      timestamp: data.timestamp
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  if (event.action !== 'dismiss') {
    const target = event.notification.data && event.notification.data.url;
    event.waitUntil(clients.openWindow(target || '/'));
  }
});
