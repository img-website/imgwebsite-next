import { create } from 'zustand'

export const useLeadStore = create((set) => ({
  upcoming: null,
  career: null,
  leadDetails: {},
  setUpcoming: (leads) => set({ upcoming: leads }),
  setCareer: (leads) => set({ career: leads }),
  setLeadDetail: (id, lead) =>
    set((state) => ({
      leadDetails: { ...state.leadDetails, [id]: lead },
    })),
  updateLead: (id, updates) =>
    set((state) => {
      const updateArray = (arr) =>
        arr ? arr.map((l) => ((l._id || l.id) === id ? { ...l, ...updates } : l)) : null
      return {
        upcoming: updateArray(state.upcoming),
        career: updateArray(state.career),
        leadDetails: state.leadDetails[id]
          ? { ...state.leadDetails, [id]: { ...state.leadDetails[id], ...updates } }
          : state.leadDetails,
      }
    }),
  clearUpcoming: () => set({ upcoming: null }),
  clearCareer: () => set({ career: null }),
  removeLead: (id) =>
    set((state) => {
      const { [id]: removed, ...rest } = state.leadDetails
      return { leadDetails: rest }
    }),
}))

