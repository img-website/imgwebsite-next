'use client'

import { useState, useEffect } from 'react'
import { subscribeUser, unsubscribeUser, sendNotification } from '../actions/pwa'

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

function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false)
  const [subscription, setSubscription] = useState(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      setIsSupported(true)
      registerServiceWorker()
    }
  }, [])

  useEffect(() => {
    if (!isSupported) return
    const timer = setTimeout(() => {
      if (!subscription) {
        if (Notification.permission === 'default') {
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              subscribeToPush().catch(() => {})
            }
          })
        } else if (Notification.permission === 'granted') {
          subscribeToPush().catch(() => {})
        }
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [isSupported, subscription])

  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'none'
    })
    const sub = await registration.pushManager.getSubscription()
    setSubscription(sub)
  }

  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
      )
    })
    setSubscription(sub)
    await subscribeUser(sub.toJSON())
  }

  async function unsubscribeFromPush() {
    await subscription?.unsubscribe()
    setSubscription(null)
    if (subscription) {
      await unsubscribeUser(subscription.endpoint)
    }
  }

  async function sendTestNotification() {
    if (subscription) {
      await sendNotification(message)
      setMessage('')
    }
  }

  if (!isSupported) {
    return <p>Push notifications are not supported in this browser.</p>
  }

  return (
    <div className="space-y-4 p-4">
      <h3 className="text-lg font-semibold">Push Notifications</h3>
      {subscription ? (
        <>
          <p>You are subscribed to push notifications.</p>
          <button onClick={unsubscribeFromPush}>Unsubscribe</button>
          <input
            type="text"
            placeholder="Enter notification message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendTestNotification}>Send Test</button>
        </>
      ) : (
        <>
          <p>You are not subscribed to push notifications.</p>
          <button onClick={subscribeToPush}>Subscribe</button>
        </>
      )}
    </div>
  )
}

function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window).MSStream)
    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)
  }, [])

  if (isStandalone) {
    return null
  }

  return (
    <div className="space-y-2 p-4">
      <h3 className="text-lg font-semibold">Install App</h3>
      <button>Add to Home Screen</button>
      {isIOS && (
        <p>
          To install this app on your iOS device, tap the share button ⎋ and then
          "Add to Home Screen" ➕.
        </p>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <div>
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  )
}
