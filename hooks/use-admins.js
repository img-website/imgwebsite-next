import { useEffect, useState, useCallback } from 'react'
import apiFetch from '@/helpers/apiFetch'
import { useAdminStore } from '@/app/store/use-admin-store'

export function useAdmins() {
  const admins = useAdminStore((state) => state.admins)
  const setAdmins = useAdminStore((state) => state.setAdmins)
  const clearAdmins = useAdminStore((state) => state.clearAdmins)
  const [loading, setLoading] = useState(!admins)

  const refresh = useCallback(() => {
    clearAdmins()
  }, [clearAdmins])

  useEffect(() => {
    if (!admins) {
      setLoading(true)
      apiFetch('/api/v1/admin/admins')
        .then((res) => res.json())
        .then((json) => {
          if (Array.isArray(json?.data)) {
            setAdmins(json.data)
          }
        })
        .finally(() => setLoading(false))
    }
  }, [admins, setAdmins])

  return { admins, loading, refresh }
}

export function useAdmin(id) {
  const admin = useAdminStore((state) => state.adminDetails[id])
  const setAdminDetail = useAdminStore((state) => state.setAdminDetail)
  const removeAdmin = useAdminStore((state) => state.removeAdmin)
  const [loading, setLoading] = useState(!admin && !!id)

  const refresh = useCallback(() => {
    removeAdmin(id)
  }, [removeAdmin, id])

  useEffect(() => {
    if (id && !admin) {
      setLoading(true)
      apiFetch(`/api/v1/admin/admins/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setAdminDetail(id, json?.data ?? null)
        })
        .finally(() => setLoading(false))
    }
  }, [id, admin, setAdminDetail])

  return { admin, loading, refresh }
}
