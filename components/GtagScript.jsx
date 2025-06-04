'use client'

import { useEffect } from 'react'

const GtagScript = () => {
  useEffect(() => {
    const loadGtag = () => {
      const script = document.createElement('script')
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-N2QQNVDS4P'
      script.async = true
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      function gtag() {
        window.dataLayer.push(arguments)
      }
      window.gtag = gtag

      gtag('js', new Date())
      gtag('config', 'G-N2QQNVDS4P')
    }

    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadGtag, { timeout: 8000 })
    } else {
      setTimeout(loadGtag, 5000)
    }
  }, [])

  return null
}

export default GtagScript
// This component dynamically loads the Google Analytics gtag script when the component mounts.
// It uses `requestIdleCallback` for performance optimization, falling back to `setTimeout` if not available.