import { create } from "zustand";

// Define the type for the store state
interface StoreState {
    storeCourse: any; // You can replace 'any' with a more specific type if known
    setStore: (params: any) => void; // Same here
}

// Create the store using Zustand
export const useStore = create<StoreState>((set) => ({
    storeCourse: {},
    setStore: (params: any) => {
        set((state) => ({
            ...state,
            storeCourse: params,
        }));
    },
}));
