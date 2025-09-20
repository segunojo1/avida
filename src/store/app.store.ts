import { DreamCard } from "@/constants";
import { create } from "zustand";

interface AppStoreTypes {
  myEntries: DreamCard[];
  searchQuery: string;
  categoryFilter: string;
  setSearchQuery: (searchQuery: string) => void;
  setCategoryFilter: (category: string) => void;
  setMyEntries: (myEntries: DreamCard[]) => void;
}

export const useAppStore = create<AppStoreTypes>((set) => ({
  myEntries: [],
  searchQuery: "",
  categoryFilter: "",
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setCategoryFilter: (categoryFilter) => set({ categoryFilter }),
  setMyEntries: (myEntries) => set({ myEntries })
}));