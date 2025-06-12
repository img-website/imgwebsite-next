import { create } from 'zustand'

export const useTeamStore = create((set) => ({
  activeTeam: null,
  setActiveTeam: (team) => set({ activeTeam: team }),
}))
