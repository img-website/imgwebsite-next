import { create } from 'zustand'

export const useImageStore = create((set) => ({
  images: null,
  imageDetails: {},
  setImages: (images) => set({ images }),
  setImageDetail: (id, image) =>
    set((state) => ({
      imageDetails: { ...state.imageDetails, [id]: image },
    })),
  updateImage: (id, updates) =>
    set((state) => {
      const images = state.images
        ? state.images.map((img) =>
            (img._id || img.id) === id ? { ...img, ...updates } : img
          )
        : null
      const detail = state.imageDetails[id]
      return {
        images,
        imageDetails: detail
          ? { ...state.imageDetails, [id]: { ...detail, ...updates } }
          : state.imageDetails,
      }
    }),
  clearImages: () => set({ images: null }),
  removeImage: (id) =>
    set((state) => {
      const { [id]: removed, ...rest } = state.imageDetails
      return { imageDetails: rest }
    }),
}))
