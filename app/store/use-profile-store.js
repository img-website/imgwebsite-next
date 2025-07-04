import { create } from 'zustand'

export const useProfileStore = create((set) => ({
  profile: undefined,
  setProfile: (profile) => set({ profile }),
  updateProfile: (updates) =>
    set((state) => ({
      profile: state.profile ? { ...state.profile, ...updates } : state.profile,
    })),
  clearProfile: () => set({ profile: undefined }),
}))
