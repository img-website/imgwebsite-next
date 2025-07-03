'use server'

import webpush from 'web-push'

webpush.setVapidDetails(
  'mailto:your-email@example.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
)

// Store subscription in memory for demo purposes. In production
// you should persist subscriptions in a database.
if (!globalThis.pwaSubscription) globalThis.pwaSubscription = null;

function getSubscription() {
  return globalThis.pwaSubscription;
}

function setSubscription(sub) {
  globalThis.pwaSubscription = sub;
}

export async function subscribeUser(sub) {
  setSubscription(sub);
  return { success: true };
}

export async function unsubscribeUser() {
  setSubscription(null);
  return { success: true };
}

export async function sendNotification(message) {
  const sub = getSubscription();
  if (!sub) {
    throw new Error('No subscription available');
  }
  try {
    await webpush.sendNotification(
      sub,
      JSON.stringify({
        title: 'Test Notification',
        body: message,
        icon: '/icon.png'
      })
    )
    return { success: true }
  } catch (error) {
    console.error('Error sending push notification:', error)
    return { success: false, error: 'Failed to send notification' }
  }
}
