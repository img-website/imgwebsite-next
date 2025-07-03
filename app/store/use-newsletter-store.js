import { create } from 'zustand'

export const useNewsletterStore = create((set) => ({
  newsletters: null,
  setNewsletters: (data) => set({ newsletters: data }),
  clearNewsletters: () => set({ newsletters: null }),
}))

