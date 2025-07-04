import { create } from "zustand";

export const useRedirectionStore = create((set) => ({
  redirections: null,
  redirectionDetails: {},
  setRedirections: (list) => set({ redirections: list }),
  setRedirectionDetail: (id, item) =>
    set((state) => ({
      redirectionDetails: { ...state.redirectionDetails, [id]: item },
    })),
  updateRedirection: (id, updates) =>
    set((state) => {
      const redirections = state.redirections
        ? state.redirections.map((r) =>
            r.id === id ? { ...r, ...updates } : r,
          )
        : null;
      const detail = state.redirectionDetails[id];
      return {
        redirections,
        redirectionDetails: detail
          ? { ...state.redirectionDetails, [id]: { ...detail, ...updates } }
          : state.redirectionDetails,
      };
    }),
  clearRedirections: () => set({ redirections: null }),
  removeRedirection: (id) =>
    set((state) => {
      const { [id]: removed, ...rest } = state.redirectionDetails;
      return { redirectionDetails: rest };
    }),
}));
