self.addEventListener('push', function(event) {
  if (event.data) {
    const data = event.data.json();
    const title = data.notification?.title || 'Notification';
    const options = {
      body: data.notification?.body,
      data: data.data || {},
    };
    event.waitUntil(self.registration.showNotification(title, options));
  }
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const url = event.notification.data?.url;
  if (url) {
    event.waitUntil(clients.openWindow(url));
  }
});
