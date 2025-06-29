'use client';
import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { toast } from 'sonner';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

export default function FCMInit() {
  useEffect(() => {
    if (typeof window === 'undefined' || !firebaseConfig.apiKey) return;
    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);

    const init = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') return;
        const token = await getToken(messaging, {
          vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
          serviceWorkerRegistration: registration
        });
        if (token) {
          await fetch('/api/v1/notifications/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
          });
        }
      } catch (err) {
        console.error('FCM setup error', err);
      }
    };

    init();
    onMessage(messaging, payload => {
      toast.info(payload.notification?.title || 'New Notification');
    });
  }, []);
  return null;
}
