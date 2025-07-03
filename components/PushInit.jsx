'use client'

import { useEffect } from 'react'
import { subscribeUser } from '@/app/actions/pwa'

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export default function PushInit() {
  useEffect(() => {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) return

    const timer = setTimeout(async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
          updateViaCache: 'none'
        })

        let sub = await registration.pushManager.getSubscription()

        let permission = Notification.permission
        if (!sub && permission === 'default') {
          permission = await Notification.requestPermission()
        }

        if (!sub && permission === 'granted') {
          sub = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(
              process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
            )
          })
          await subscribeUser(sub.toJSON())
        }
      } catch (err) {
        console.error('Failed to subscribe for push notifications:', err)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return null
}
