"use client";
import { create } from 'zustand'

export const useApiCache = create((set, get) => ({
  cache: {},
  getData: (key) => get().cache[key],
  setData: (key, data) => set((state) => ({ cache: { ...state.cache, [key]: data } })),
  clearData: (key) => set((state) => {
    if (!key) return { cache: {} };
    const newCache = { ...state.cache };
    delete newCache[key];
    return { cache: newCache };
  })
}));
