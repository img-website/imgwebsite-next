import admin from 'firebase-admin';

let initialized = false;

export function initFirebase() {
  if (!initialized) {
    const serviceAccount = process.env.FCM_SERVICE_ACCOUNT && JSON.parse(process.env.FCM_SERVICE_ACCOUNT);
    if (!serviceAccount) {
      throw new Error('FCM_SERVICE_ACCOUNT environment variable not set');
    }
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
    initialized = true;
  }
}

export async function sendPushNotification(tokens, payload) {
  initFirebase();
  const message = {
    tokens: Array.isArray(tokens) ? tokens : [tokens],
    notification: {
      title: payload.title || 'Notification',
      body: payload.body || ''
    },
    data: payload.data || {}
  };
  try {
    await admin.messaging().sendEachForMulticast(message);
    return { success: true };
  } catch (err) {
    console.error('Push notification error:', err);
    return { success: false, error: 'Failed to send push notification' };
  }
}
