import { create } from 'zustand'

export const useAdminStore = create((set) => ({
  admins: null,
  adminDetails: {},
  setAdmins: (admins) => set({ admins }),
  setAdminDetail: (id, admin) =>
    set((state) => ({
      adminDetails: { ...state.adminDetails, [id]: admin },
    })),
  updateAdmin: (id, updates) =>
    set((state) => {
      const admins = state.admins
        ? state.admins.map((a) =>
            (a._id || a.id) === id ? { ...a, ...updates } : a
          )
        : null
      const detail = state.adminDetails[id]
      return {
        admins,
        adminDetails: detail
          ? { ...state.adminDetails, [id]: { ...detail, ...updates } }
          : state.adminDetails,
      }
    }),
  clearAdmins: () => set({ admins: null }),
  removeAdmin: (id) =>
    set((state) => {
      const { [id]: removed, ...rest } = state.adminDetails
      return { adminDetails: rest }
    }),
}))
