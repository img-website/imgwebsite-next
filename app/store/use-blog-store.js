import { create } from 'zustand'

export const useBlogStore = create((set) => ({
  blogs: null,
  blogDetails: {},
  setBlogs: (blogs) => set({ blogs }),
  setBlogDetail: (id, blog) =>
    set((state) => ({
      blogDetails: { ...state.blogDetails, [id]: blog },
    })),
  updateBlog: (id, updates) =>
    set((state) => {
      const blogs = state.blogs
        ? state.blogs.map((b) =>
            (b._id || b.id) === id ? { ...b, ...updates } : b
          )
        : null
      const detail = state.blogDetails[id]
      return {
        blogs,
        blogDetails: detail
          ? { ...state.blogDetails, [id]: { ...detail, ...updates } }
          : state.blogDetails,
      }
    }),
  clearBlogs: () => set({ blogs: null }),
  removeBlog: (id) =>
    set((state) => {
      const { [id]: removed, ...rest } = state.blogDetails
      return { blogDetails: rest }
    }),
}))
