import { useEffect, useState, useCallback } from 'react'
import apiFetch from '@/helpers/apiFetch'
import { useLeadStore } from '@/app/store/use-lead-store'

export function useLeads(type = 'upcoming') {
  const leads = useLeadStore((state) => state[type])
  const set = useLeadStore((state) =>
    type === 'career' ? state.setCareer : state.setUpcoming
  )
  const clear = useLeadStore((state) =>
    type === 'career' ? state.clearCareer : state.clearUpcoming
  )
  const [loading, setLoading] = useState(!leads)

  const refresh = useCallback(() => {
    clear()
  }, [clear])

  useEffect(() => {
    if (!leads) {
      setLoading(true)
      const endpoint = type === 'career' ? '/api/v1/admin/leads/career' : '/api/v1/admin/leads/upcoming'
      apiFetch(endpoint)
        .then((res) => res.json())
        .then((json) => {
          if (Array.isArray(json?.data)) {
            set(json.data)
          }
        })
        .finally(() => setLoading(false))
    }
  }, [leads, set, type])

  return { leads, loading, refresh }
}

export function useLead(id) {
  const lead = useLeadStore((state) => state.leadDetails[id])
  const setLeadDetail = useLeadStore((state) => state.setLeadDetail)
  const removeLead = useLeadStore((state) => state.removeLead)
  const [loading, setLoading] = useState(!lead && !!id)

  const refresh = useCallback(() => {
    removeLead(id)
  }, [removeLead, id])

  useEffect(() => {
    if (id && !lead) {
      setLoading(true)
      apiFetch(`/api/v1/admin/leads/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setLeadDetail(id, json?.data ?? null)
        })
        .finally(() => setLoading(false))
    }
  }, [id, lead, setLeadDetail])

  return { lead, loading, refresh }
}

