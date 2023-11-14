import { create } from 'zustand';

// Interfaces
import { Product } from '@interfaces/product';

// Helpers
import { getStorage, setStorage } from '@helpers/storage';

// Constants
import { STORAGE_KEY } from '@constants/common';

type CartType = {
  carts: Product[];
  setCarts: (value: Product[]) => void;
  deleteCart: (id: string) => void;
};

export const useCartStore = create<CartType>()((set) => ({
  carts: [],
  setCarts: (data: Product[]) => set(() => ({ carts: data })),
  deleteCart: (id: string) => {
    const currentCart = getStorage(STORAGE_KEY.CART_KEY) || [];
    const updatedCart = currentCart.filter((item: Product) => item.id !== id);
    setStorage(STORAGE_KEY.CART_KEY, updatedCart);
    set({ carts: updatedCart });
  }
}));
