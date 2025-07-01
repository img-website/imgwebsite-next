"use client";
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTeamStore = create(
  persist(
    (set) => ({
      activeTeam: null,
      setActiveTeam: (team) => set({ activeTeam: team }),
    }),
    { name: 'active-team' }
  )
);
