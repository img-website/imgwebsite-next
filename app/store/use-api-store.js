import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { setCookie, getCookie } from 'cookies-next'

const cookieStorage = {
  getItem: (name) => {
    if (typeof document === 'undefined') return null
    return getCookie(name) ?? null
  },
  setItem: (name, value) => {
    if (typeof document === 'undefined') return
    setCookie(name, value, { maxAge: 7 * 24 * 60 * 60, path: '/' })
  },
  removeItem: (name) => {
    if (typeof document === 'undefined') return
    setCookie(name, '', { maxAge: -1, path: '/' })
  }
}

export const useApiStore = create(
  persist(
    (set) => ({
      modules: {},
      setModuleData: (module, data) => set((state) => ({ modules: { ...state.modules, [module]: data } })),
      clearModuleData: (module) => set((state) => ({ modules: { ...state.modules, [module]: undefined } }))
    }),
    {
      name: 'api-data',
      storage: createJSONStorage(() => cookieStorage)
    }
  )
)

export async function refreshModule(module, url) {
  try {
    const token = getCookie('token')
    const headers = token ? { Authorization: `Bearer ${token}` } : {}
    const res = await fetch(url, { cache: 'no-store', headers })
    const json = await res.json()
    if (json.success) {
      useApiStore.getState().setModuleData(module, json.data)
    }
  } catch (e) {
    console.error('Failed to refresh module', module, e)
  }
}
