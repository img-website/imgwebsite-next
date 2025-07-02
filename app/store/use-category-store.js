import { create } from 'zustand'

export const useCategoryStore = create((set) => ({
  categories: null,
  categoryDetails: {},
  setCategories: (cats) => set({ categories: cats }),
  setCategoryDetail: (id, cat) =>
    set((state) => ({
      categoryDetails: { ...state.categoryDetails, [id]: cat },
    })),
  updateCategory: (id, updates) =>
    set((state) => {
      const categories = state.categories
        ? state.categories.map((c) =>
            (c._id || c.id) === id ? { ...c, ...updates } : c
          )
        : null;
      const detail = state.categoryDetails[id];
      return {
        categories,
        categoryDetails: detail
          ? { ...state.categoryDetails, [id]: { ...detail, ...updates } }
          : state.categoryDetails,
      };
    }),
  clearCategories: () => set({ categories: null }),
  removeCategory: (id) =>
    set((state) => {
      const { [id]: removed, ...rest } = state.categoryDetails
      return { categoryDetails: rest }
    }),
}))
