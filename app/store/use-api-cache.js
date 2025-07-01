"use client";
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useApiCache = create(persist(
  (set, get) => ({
    cache: {},
    getData: (key) => get().cache[key],
    setData: (key, data) =>
      set((state) => ({ cache: { ...state.cache, [key]: data } })),
    clearData: (key) =>
      set((state) => {
        if (!key) return { cache: {} };
        const newCache = { ...state.cache };
        delete newCache[key];
        return { cache: newCache };
      }),
  }),
  { name: 'api-cache' }
));
