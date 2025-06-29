import { initializeApp, cert } from 'firebase-admin/app';
import { getMessaging } from 'firebase-admin/messaging';

let app;
export function getFirebaseApp() {
  if (!app) {
    const serviceAccount = process.env.FCM_SERVICE_ACCOUNT;
    if (!serviceAccount) throw new Error('FCM_SERVICE_ACCOUNT not configured');
    const credentials = JSON.parse(serviceAccount);
    app = initializeApp({ credential: cert(credentials) });
  }
  return app;
}

export function getFirebaseMessaging() {
  getFirebaseApp();
  return getMessaging();
}

export async function sendPushNotification({ title, body, data }) {
  const messaging = getFirebaseMessaging();
  const NotificationToken = (await import('../models/NotificationToken.js')).default;
  const connectDB = (await import('./db.js')).default;
  await connectDB();
  const tokens = await NotificationToken.find().distinct('token');
  if (!tokens.length) return { success: false, error: 'No tokens registered' };
  const message = { notification: { title, body }, data: data || {} };
  const CHUNK_SIZE = 500; // FCM allows max 500 tokens per request
  const responses = [];
  try {
    for (let i = 0; i < tokens.length; i += CHUNK_SIZE) {
      const chunk = tokens.slice(i, i + CHUNK_SIZE);
      const res = await messaging.sendEachForMulticast({ tokens: chunk, ...message });
      responses.push(...res.responses);
    }
    return { success: true, data: responses };
  } catch (err) {
    console.error('FCM error', err);
    return { success: false, error: 'Error sending notification' };
  }
}
