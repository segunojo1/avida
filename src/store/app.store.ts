import { DreamCard } from "@/constants";
import { create } from "zustand";

interface AppStoreTypes {
  myEntries: DreamCard[];
  searchQuery: string;
  categoryFilter: string;
  loadingFetchCards: boolean;
  
  setLoadingFetchCards: (loadingFetchCards: boolean) => void;
  setSearchQuery: (searchQuery: string) => void;
  setCategoryFilter: (category: string) => void;
  setMyEntries: (myEntries: DreamCard[]) => void;
}

export const useAppStore = create<AppStoreTypes>((set) => ({
  myEntries: [],
  searchQuery: "",
  categoryFilter: "",
  loadingFetchCards: false,
  setLoadingFetchCards: (loadingFetchCards) => set({ loadingFetchCards }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setCategoryFilter: (categoryFilter) => set({ categoryFilter }),
  setMyEntries: (myEntries) => set({ myEntries })
}));