import { create } from 'zustand'

export const LEAD_STATUS = {
  UPCOMING: 1,
  CAREER: 2,
}

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
  moveLead: (id, status) =>
    set((state) => {
      const getId = (l) => l._id || l.id
      let { upcoming, career } = state
      if (status === LEAD_STATUS.CAREER) {
        const lead = upcoming?.find((l) => getId(l) === id)
        upcoming = upcoming?.filter((l) => getId(l) !== id) || null
        if (lead) {
          const updated = { ...lead, status }
          career = career ? [updated, ...career] : [updated]
        }
      } else if (status === LEAD_STATUS.UPCOMING) {
        const lead = career?.find((l) => getId(l) === id)
        career = career?.filter((l) => getId(l) !== id) || null
        if (lead) {
          const updated = { ...lead, status }
          upcoming = upcoming ? [updated, ...upcoming] : [updated]
        }
      }
      const leadDetails = state.leadDetails[id]
        ? { ...state.leadDetails, [id]: { ...state.leadDetails[id], status } }
        : state.leadDetails
      return { upcoming, career, leadDetails }
    }),
}))

