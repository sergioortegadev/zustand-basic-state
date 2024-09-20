import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface State {
  count: number;
  setCount: (count: number) => void;
  showLegend: boolean;
  setShowLegend: (show: boolean) => void;
}

export const useStateStore = create<State>()(
  persist(
    (set) => ({
      count: 0,
      setCount: (number) => set({ count: number }),
      showLegend: false,
      setShowLegend: (show) => set({ showLegend: show }),
    }),
    { name: "state", storage: createJSONStorage(() => sessionStorage) }
  )
);
