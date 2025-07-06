const CACHE_NAME = 'offline-cache-v1';
const OFFLINE_URL = '/offline';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.add(OFFLINE_URL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    );
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
