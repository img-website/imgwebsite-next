'use server'

import webpush from 'web-push'
import connectDB from '../lib/db.js'
import PushSubscription from '../models/PushSubscription.js'

if (process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails(
    'mailto:your-email@example.com',
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY,
  )
}

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
  bodyOrOptions,
  title,
  icon,
  url,
) {
  await connectDB()
  const subs = await PushSubscription.find().lean()
  let payload

  if (bodyOrOptions && typeof bodyOrOptions === 'object' && !Array.isArray(bodyOrOptions)) {
    payload = { ...bodyOrOptions }
  } else {
    payload = {
      title: title ?? 'I have a new message for you!',
      body: bodyOrOptions,
      icon: icon ?? '/android-chrome-192x192.png',
      url: url ?? '/',
    }
  }

  const payloadString = JSON.stringify(payload)
  for (const sub of subs) {
    try {
      await webpush.sendNotification(sub, payloadString)
    } catch (error) {
      console.error('Error sending push notification:', error)
      // Clean up expired or unsubscribed endpoints
      if (error.statusCode === 404 || error.statusCode === 410) {
        try {
          await PushSubscription.deleteOne({ endpoint: sub.endpoint })
        } catch (delErr) {
          console.error('Failed to remove subscription:', delErr)
        }
      }
    }
  }
  return { success: true }
}
