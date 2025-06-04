'use client'

import { useEffect } from 'react'

const TawkToWidget = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://embed.tawk.to/66cc5e1450c10f7a00a07d00/1i674v16o'
    script.async = true
    script.charset = 'UTF-8'
    script.crossOrigin = '*'

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return null
}

export default TawkToWidget
// This component dynamically loads the Tawk.to chat widget script when the component mounts.
// It appends the script to the document body and cleans it up when the component unmounts.