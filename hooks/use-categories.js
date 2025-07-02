import { useEffect, useState } from 'react'
import apiFetch from '@/helpers/apiFetch'
import { useCategoryStore } from '@/app/store/use-category-store'

export function useCategories() {
  const categories = useCategoryStore(state => state.categories)
  const setCategories = useCategoryStore(state => state.setCategories)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!categories && !loading) {
      setLoading(true)
      apiFetch('/api/v1/admin/blogs/categories')
        .then(res => res.json())
        .then(json => {
          if (Array.isArray(json?.data)) {
            setCategories(json.data)
          }
        })
        .finally(() => setLoading(false))
    }
  }, [categories, loading, setCategories])

  return { categories, loading }
}

export function useCategory(id) {
  const category = useCategoryStore(state => state.categoryDetails[id])
  const setCategoryDetail = useCategoryStore(state => state.setCategoryDetail)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (id && !category && !loading) {
      setLoading(true)
      apiFetch(`/api/v1/admin/blogs/categories/${id}`)
        .then(res => res.json())
        .then(json => {
          if (json?.data) {
            setCategoryDetail(json.data)
          }
        })
        .finally(() => setLoading(false))
    }
  }, [id, category, loading, setCategoryDetail])

  return { category, loading }
}
