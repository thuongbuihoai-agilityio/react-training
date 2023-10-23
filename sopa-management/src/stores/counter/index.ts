import { create } from 'zustand';

type CounterType = {
  count: number;
  setCount: (newCount: number) => void;
};

export const useCounterStore = create<CounterType>()((set) => ({
  count: 0,
  setCount: (newCount) => set({ count: newCount })
}));
