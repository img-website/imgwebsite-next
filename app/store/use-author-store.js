import { create } from 'zustand'

export const useAuthorStore = create((set) => ({
  authors: null,
  authorDetails: {},
  setAuthors: (authors) => set({ authors }),
  setAuthorDetail: (id, author) =>
    set((state) => ({
      authorDetails: { ...state.authorDetails, [id]: author },
    })),
  updateAuthor: (id, updates) =>
    set((state) => {
      const authors = state.authors
        ? state.authors.map((a) =>
            (a._id || a.id) === id ? { ...a, ...updates } : a
          )
        : null
      const detail = state.authorDetails[id]
      return {
        authors,
        authorDetails: detail
          ? { ...state.authorDetails, [id]: { ...detail, ...updates } }
          : state.authorDetails,
      }
    }),
  clearAuthors: () => set({ authors: null }),
  removeAuthor: (id) =>
    set((state) => {
      const { [id]: removed, ...rest } = state.authorDetails
      return { authorDetails: rest }
    }),
}))
