'use server';

import webpush from 'web-push';
import connectDB from '@/app/lib/db';
import PushSubscriber from '@/app/models/PushSubscriber';

webpush.setVapidDetails(
  'mailto:your-email@example.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

export async function subscribeUser(sub) {
  await connectDB();
  await PushSubscriber.updateOne(
    { endpoint: sub.endpoint },
    { $set: { keys: sub.keys } },
    { upsert: true }
  );
  return { success: true };
}

export async function unsubscribeUser(sub) {
  await connectDB();
  await PushSubscriber.deleteOne({ endpoint: sub.endpoint });
  return { success: true };
}

export async function sendNotification(message) {
  await connectDB();
  const subs = await PushSubscriber.find().lean();
  const payload = JSON.stringify({
    title: 'New Blog Published',
    body: message,
    icon: '/icon.png',
  });
  const results = await Promise.allSettled(
    subs.map((s) =>
      webpush.sendNotification(s, payload).catch((err) => {
        console.error('Push error for', s.endpoint, err);
        return null;
      })
    )
  );
  return { success: true, results };
}
