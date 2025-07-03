import { useEffect, useState, useCallback } from 'react'
import apiFetch from '@/helpers/apiFetch'
import { useImageStore } from '@/app/store/use-image-store'

export function useImages() {
  const images = useImageStore((state) => state.images)
  const setImages = useImageStore((state) => state.setImages)
  const clearImages = useImageStore((state) => state.clearImages)
  const [loading, setLoading] = useState(!images)

  const refresh = useCallback(() => {
    clearImages()
  }, [clearImages])

  useEffect(() => {
    if (!images) {
      setLoading(true)
      apiFetch('/api/v1/admin/images')
        .then((res) => res.json())
        .then((json) => {
          if (Array.isArray(json?.data)) {
            setImages(json.data)
          }
        })
        .finally(() => setLoading(false))
    }
  }, [images, setImages])

  return { images, loading, refresh }
}

export function useImage(id) {
  const image = useImageStore((state) => state.imageDetails[id])
  const setImageDetail = useImageStore((state) => state.setImageDetail)
  const removeImage = useImageStore((state) => state.removeImage)
  const [loading, setLoading] = useState(!image && !!id)

  const refresh = useCallback(() => {
    removeImage(id)
  }, [removeImage, id])

  useEffect(() => {
    if (id && !image) {
      setLoading(true)
      apiFetch(`/api/v1/admin/images/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setImageDetail(id, json?.data ?? null)
        })
        .finally(() => setLoading(false))
    }
  }, [id, image, setImageDetail])

  return { image, loading, refresh }
}
