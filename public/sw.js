self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json()
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
    }
    event.waitUntil(self.registration.showNotification(data.title, options))
  }
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close()
  const target = event.notification.data && event.notification.data.url
  event.waitUntil(clients.openWindow(target || '/'))
})
