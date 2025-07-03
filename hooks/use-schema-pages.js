import { useEffect, useState, useCallback } from 'react'
import apiFetch from '@/helpers/apiFetch'
import { useSchemaStore } from '@/app/store/use-schema-store'

export function useSchemaPages() {
  const pages = useSchemaStore((state) => state.pages)
  const setPages = useSchemaStore((state) => state.setPages)
  const clearPages = useSchemaStore((state) => state.clearPages)
  const [loading, setLoading] = useState(!pages)

  const refresh = useCallback(() => {
    clearPages()
  }, [clearPages])

  useEffect(() => {
    if (!pages) {
      setLoading(true)
      apiFetch('/api/v1/admin/pages')
        .then((res) => res.json())
        .then((json) => {
          if (Array.isArray(json?.data)) {
            setPages(json.data)
          }
        })
        .finally(() => setLoading(false))
    }
  }, [pages, setPages])

  return { pages, loading, refresh }
}
