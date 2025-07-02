import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
// Client-side cookie helpers using the Web API
function getCookie(name) {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : null
}

function setCookie(name, value, options = {}) {
  if (typeof document === 'undefined') return
  const opts = { path: '/', maxAge: 7 * 24 * 60 * 60, ...options }
  document.cookie = `${name}=${encodeURIComponent(value)}; path=${opts.path}; max-age=${opts.maxAge}`
}

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
    const res = await fetch('/api/refresh-module', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ module, url })
    })
    const json = await res.json()
    if (json.success && json.data) {
      useApiStore.getState().setModuleData(module, json.data)
    }
  } catch (e) {
    console.error('Failed to refresh module', module, e)
  }
}
