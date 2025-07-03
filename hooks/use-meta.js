import { useEffect, useState, useCallback, useRef } from 'react'
import apiFetch from '@/helpers/apiFetch'
import { useMetaStore } from '@/app/store/use-meta-store'

function addImageUrls(meta) {
  if (!meta) return meta
  const toUrl = (name) =>
    name && !name.startsWith('http')
      ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/${name}`
      : name

  meta.appleWebApp.startupImage.mainImageUrl = toUrl(
    meta.appleWebApp.startupImage.mainImageUrl
  )
  meta.appleWebApp.startupImage.url = toUrl(meta.appleWebApp.startupImage.url)
  meta.icons.icon = meta.icons.icon.map((i) => ({ ...i, url: toUrl(i.url) }))
  meta.icons.shortcut = toUrl(meta.icons.shortcut)
  meta.icons.apple = toUrl(meta.icons.apple)
  meta.icons.other = meta.icons.other.map((i) => ({ ...i, url: toUrl(i.url) }))
  meta.twitter.images = meta.twitter.images.map(toUrl)
  meta.openGraph.images = meta.openGraph.images.map((img) => ({
    ...img,
    url: toUrl(img.url),
  }))
  return meta
}

export function useStaticMeta() {
  const meta = useMetaStore((state) => state.staticMeta)
  const setMeta = useMetaStore((state) => state.setStaticMeta)
  const clearMeta = useMetaStore((state) => state.clearStaticMeta)
  const [loading, setLoading] = useState(!meta)
  const [error, setError] = useState(null)
  const fetched = useRef(false)

  const refresh = useCallback(() => {
    clearMeta()
    setError(null)
    fetched.current = false
    setLoading(true)
  }, [clearMeta])

  useEffect(() => {
    if (!meta && !fetched.current) {
      fetched.current = true
      setLoading(true)
      apiFetch('/api/v1/admin/meta/static')
        .then((res) => res.json())
        .then((json) => {
          if (json?.data) {
            setMeta(addImageUrls(json.data))
          } else {
            setMeta(null)
            setError(json.error || 'Static meta not found')
          }
        })
        .catch(() => setError('Failed to load static meta'))
        .finally(() => setLoading(false))
    }
  }, [meta, setMeta])

  return { meta, loading, error, refresh }
}
