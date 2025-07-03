import { useEffect, useState, useCallback } from 'react'
import apiFetch from '@/helpers/apiFetch'
import { useNewsletterStore } from '@/app/store/use-newsletter-store'

export function useNewsletters() {
  const newsletters = useNewsletterStore((state) => state.newsletters)
  const setNewsletters = useNewsletterStore((state) => state.setNewsletters)
  const clearNewsletters = useNewsletterStore((state) => state.clearNewsletters)
  const [loading, setLoading] = useState(!newsletters)

  const refresh = useCallback(() => {
    clearNewsletters()
  }, [clearNewsletters])

  useEffect(() => {
    if (!newsletters) {
      setLoading(true)
      apiFetch('/api/v1/admin/newsletters')
        .then((res) => res.json())
        .then((json) => {
          if (Array.isArray(json?.data)) {
            setNewsletters(json.data)
          }
        })
        .finally(() => setLoading(false))
    }
  }, [newsletters, setNewsletters])

  return { newsletters, loading, refresh }
}

