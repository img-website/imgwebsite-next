import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let messaging;

export default function usePushNotifications() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const app = initializeApp(firebaseConfig);
    messaging = getMessaging(app);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((registration) => {
          requestPermission(registration);
        });
    }

    onMessage(messaging, () => {});
  }, []);
}

function requestPermission(registration) {
  Notification.requestPermission().then(async (permission) => {
    if (permission === 'granted') {
      try {
        const token = await getToken(messaging, {
          vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
          serviceWorkerRegistration: registration
        });
        if (token) {
          await fetch('/api/v1/notifications/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
          });
        }
      } catch (err) {
        console.error('Token error', err);
      }
    }
  });
}
