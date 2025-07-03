'use server'

import webpush from 'web-push'
import connectDB from '../lib/db.js'
import PushSubscription from '../models/PushSubscription.js'

webpush.setVapidDetails(
  `mailto:${process.env.LEADS_NOTIFICATION_EMAIL}`,
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY,
)

export async function subscribeUser(sub) {
  await connectDB()
  await PushSubscription.findOneAndUpdate(
    { endpoint: sub.endpoint },
    sub,
    { upsert: true, new: true },
  )
  return { success: true }
}

export async function unsubscribeUser(endpoint) {
  await connectDB()
  await PushSubscription.deleteOne({ endpoint })
  return { success: true }
}

export async function sendNotification(
  body,
  title = 'Test Notification',
  icon = '/icon.png',
  url = '/',
) {
  await connectDB()
  const subs = await PushSubscription.find().lean()
  const payload = JSON.stringify({ title, body, icon, url })
  for (const sub of subs) {
    try {
      await webpush.sendNotification(sub, payload)
    } catch (error) {
      console.error('Error sending push notification:', error)
    }
  }
  return { success: true }
}
