import { create } from 'zustand'

export const useCategoryStore = create((set) => ({
  categories: null,
  categoryDetails: {},
  setCategories: (cats) => set({ categories: cats }),
  setCategoryDetail: (cat) =>
    set((state) => ({
      categoryDetails: { ...state.categoryDetails, [cat._id || cat.id]: cat },
    })),
}))
