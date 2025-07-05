import { create } from 'zustand'

export const useSchemaStore = create((set) => ({
  pages: null,
  setPages: (pages) => set({ pages }),
  clearPages: () => set({ pages: null }),
}))
