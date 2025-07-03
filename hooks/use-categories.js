import { useEffect, useState, useCallback } from 'react'
import apiFetch from '@/helpers/apiFetch'
import { useCategoryStore } from '@/app/store/use-category-store'

export function useCategories() {
  const categories = useCategoryStore((state) => state.categories)
  const setCategories = useCategoryStore((state) => state.setCategories)
  const clearCategories = useCategoryStore((state) => state.clearCategories)
  const [loading, setLoading] = useState(!categories)

  const refresh = useCallback(() => {
    clearCategories()
  }, [clearCategories])

  useEffect(() => {
    if (!categories) {
      setLoading(true)
      apiFetch('/api/v1/admin/blogs/categories')
        .then((res) => res.json())
        .then((json) => {
          if (Array.isArray(json?.data)) {
            setCategories(json.data)
          }
        })
        .finally(() => setLoading(false))
    }
  }, [categories, setCategories])

  return { categories, loading, refresh }
}

export function useCategory(id) {
  const category = useCategoryStore((state) => state.categoryDetails[id])
  const setCategoryDetail = useCategoryStore((state) => state.setCategoryDetail)
  const removeCategory = useCategoryStore((state) => state.removeCategory)
  const [loading, setLoading] = useState(!category && !!id)

  const refresh = useCallback(() => {
    removeCategory(id)
  }, [removeCategory, id])

  useEffect(() => {
    if (id && !category) {
      setLoading(true)
      apiFetch(`/api/v1/admin/blogs/categories/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setCategoryDetail(id, json?.data ?? null)
        })
        .finally(() => setLoading(false))
    }
  }, [id, category, setCategoryDetail])

  return { category, loading, refresh }
}
