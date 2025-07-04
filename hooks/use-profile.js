import { useEffect, useState, useCallback } from 'react'
import apiFetch from '@/helpers/apiFetch'
import { useProfileStore } from '@/app/store/use-profile-store'

export function useProfile() {
  const profile = useProfileStore((state) => state.profile)
  const setProfile = useProfileStore((state) => state.setProfile)
  const clearProfile = useProfileStore((state) => state.clearProfile)
  const [loading, setLoading] = useState(profile === undefined)

  const refresh = useCallback(() => {
    clearProfile()
  }, [clearProfile])

  useEffect(() => {
    if (profile === undefined) {
      setLoading(true)
      apiFetch('/api/v1/admin/admins/me')
        .then((res) => res.json())
        .then((json) => {
          setProfile(json?.data ?? null)
        })
        .finally(() => setLoading(false))
    }
  }, [profile, setProfile])

  return { profile, loading, refresh }
}
