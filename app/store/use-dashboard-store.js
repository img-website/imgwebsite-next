import { create } from 'zustand'

export const useDashboardStore = create((set) => ({
  stats: null,
  setStats: (stats) => set({ stats }),
  clearStats: () => set({ stats: null }),
}))
