import { create } from 'zustand'

export const useStaticMetaStore = create((set) => ({
  meta: undefined,
  setMeta: (meta) => set({ meta }),
  updateMeta: (updates) =>
    set((state) => ({
      meta: state.meta ? { ...state.meta, ...updates } : updates,
    })),
  clearMeta: () => set({ meta: undefined }),
}))
