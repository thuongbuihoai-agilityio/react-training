import { create } from 'zustand';

// Interfaces
import { Product } from '@interfaces/product';

type CartType = {
  carts: Product[];
  setCarts: (value?: Product[]) => void;
  deleteProductInCart: (id: string) => void;
};

export const useCartStore = create<CartType>()((set) => ({
  carts: [],
  setCarts: (data?: Product[]) => set(() => ({ carts: data })),
  deleteProductInCart: (id: string) =>
    set((state) => ({
      carts: state.carts.filter((product) => product.id !== id)
    }))
}));
