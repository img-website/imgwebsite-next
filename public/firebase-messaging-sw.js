importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyC-Kyf7bL6e9sHsrxrGeYNa377e2HMNgNQ',
  authDomain: 'imgglobaljaipur.firebaseapp.com',
  projectId: 'imgglobaljaipur',
  messagingSenderId: '25119988071',
  appId: '1:25119988071:web:45d01eacbdf48a81f5b7c2',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});
