self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.notification?.title || 'New Notification';
  const options = {
    body: data.notification?.body || '',
    data: data.data || {}
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
