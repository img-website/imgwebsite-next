import { initializeApp } from 'firebase/app';
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw';

const firebaseConfig = {
  apiKey: 'AIzaSyC-Kyf7bL6e9sHsrxrGeYNa377e2HMNgNQ',
  authDomain: 'imgglobaljaipur.firebaseapp.com',
  projectId: 'imgglobaljaipur',
  messagingSenderId: '25119988071',
  appId: '1:25119988071:web:45d01eacbdf48a81f5b7c2'
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onBackgroundMessage(messaging, payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body
  });
});
