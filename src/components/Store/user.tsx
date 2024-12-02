import { create } from "zustand";

// Define the type for the store state
interface StoreState {
    store: any; // You can replace 'any' with a more specific type if known
    setStore: (params: any) => void; // Same here
}

// Create the store using Zustand
export const userStore = create<StoreState>((set) => ({
    store: {},
    setStore: (params: any) => {
        set((state) => ({
            ...state,
            store: params,
        }));
    },
}));
