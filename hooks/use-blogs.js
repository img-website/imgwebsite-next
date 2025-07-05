import { useEffect, useState, useCallback } from 'react'
import apiFetch from '@/helpers/apiFetch'
import { useBlogStore } from '@/app/store/use-blog-store'

export function useBlogs() {
  const blogs = useBlogStore((state) => state.blogs)
  const setBlogs = useBlogStore((state) => state.setBlogs)
  const clearBlogs = useBlogStore((state) => state.clearBlogs)
  const [loading, setLoading] = useState(!blogs)

  const refresh = useCallback(() => {
    clearBlogs()
  }, [clearBlogs])

  useEffect(() => {
    if (!blogs) {
      setLoading(true)
      apiFetch('/api/v1/admin/blogs?limit=1000')
        .then((res) => res.json())
        .then((json) => {
          if (Array.isArray(json?.data)) {
            setBlogs(json.data)
          }
        })
        .finally(() => setLoading(false))
    }
  }, [blogs, setBlogs])

  return { blogs, loading, refresh }
}

export function useBlog(id) {
  const blog = useBlogStore((state) => state.blogDetails[id])
  const setBlogDetail = useBlogStore((state) => state.setBlogDetail)
  const removeBlog = useBlogStore((state) => state.removeBlog)
  const [loading, setLoading] = useState(!blog && !!id)

  const refresh = useCallback(() => {
    removeBlog(id)
  }, [removeBlog, id])

  useEffect(() => {
    if (id && !blog) {
      setLoading(true)
      apiFetch(`/api/v1/admin/blogs/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setBlogDetail(id, json?.data ?? null)
        })
        .finally(() => setLoading(false))
    }
  }, [id, blog, setBlogDetail])

  return { blog, loading, refresh }
}
