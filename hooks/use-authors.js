import { useEffect, useState, useCallback } from 'react'
import apiFetch from '@/helpers/apiFetch'
import { useAuthorStore } from '@/app/store/use-author-store'

export function useAuthors() {
  const authors = useAuthorStore((state) => state.authors)
  const setAuthors = useAuthorStore((state) => state.setAuthors)
  const clearAuthors = useAuthorStore((state) => state.clearAuthors)
  const [loading, setLoading] = useState(!authors)

  const refresh = useCallback(() => {
    clearAuthors()
  }, [clearAuthors])

  useEffect(() => {
    if (!authors) {
      setLoading(true)
      apiFetch('/api/v1/admin/blogs/authors')
        .then((res) => res.json())
        .then((json) => {
          if (Array.isArray(json?.data)) {
            setAuthors(json.data)
          }
        })
        .finally(() => setLoading(false))
    }
  }, [authors, setAuthors])

  return { authors, loading, refresh }
}

export function useAuthor(id) {
  const author = useAuthorStore((state) => state.authorDetails[id])
  const setAuthorDetail = useAuthorStore((state) => state.setAuthorDetail)
  const removeAuthor = useAuthorStore((state) => state.removeAuthor)
  const [loading, setLoading] = useState(!author && !!id)

  const refresh = useCallback(() => {
    removeAuthor(id)
  }, [removeAuthor, id])

  useEffect(() => {
    if (id && !author) {
      setLoading(true)
      apiFetch(`/api/v1/admin/blogs/authors/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setAuthorDetail(id, json?.data ?? null)
        })
        .finally(() => setLoading(false))
    }
  }, [id, author, setAuthorDetail])

  return { author, loading, refresh }
}
