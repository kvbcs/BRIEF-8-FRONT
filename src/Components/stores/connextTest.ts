import { create } from "zustand";

interface connectSatate {
	isConnected: boolean;
	setIsConnected: (connect: boolean) => void;
}
export const useStoreConnect = create<connectSatate>()((set) => ({
	isConnected: false,
	setIsConnected: (connect: boolean) =>
		set((state) => ({ isConnected: connect })),
}));
