import { create } from 'zustand'

export const useMetaStore = create((set) => ({
  staticMeta: null,
  setStaticMeta: (meta) => set({ staticMeta: meta }),
  updateStaticMeta: (updates) =>
    set((state) => ({ staticMeta: state.staticMeta ? { ...state.staticMeta, ...updates } : null })),
  clearStaticMeta: () => set({ staticMeta: null }),
}))
