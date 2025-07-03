import { useEffect, useState, useCallback } from 'react'
import apiFetch from '@/helpers/apiFetch'
import { useDashboardStore } from '@/app/store/use-dashboard-store'

export function useDashboard() {
  const stats = useDashboardStore((state) => state.stats)
  const setStats = useDashboardStore((state) => state.setStats)
  const clearStats = useDashboardStore((state) => state.clearStats)
  const [loading, setLoading] = useState(!stats)

  const refresh = useCallback(() => {
    clearStats()
  }, [clearStats])

  useEffect(() => {
    if (!stats) {
      setLoading(true)
      apiFetch('/api/v1/admin/dashboard')
        .then((res) => res.json())
        .then((json) => {
          if (json?.data) {
            setStats(json.data)
          }
        })
        .finally(() => setLoading(false))
    }
  }, [stats, setStats])

  return { stats, loading, refresh }
}
