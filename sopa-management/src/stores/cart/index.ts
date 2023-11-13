import { create } from 'zustand';

// Interfaces
import { Product } from '@interfaces/product';

// Helpers
import { getStorage, setStorage } from '@helpers/storage';

// Constants
import { STORAGE_KEY } from '@constants/common';
import { QuantityType } from '@interfaces/cart';

type CartType = {
  carts: Product[];
  setCarts: (value: Product[]) => void;
  updateQuantity: (id: string, quantityType: QuantityType) => void;
  deleteCart: (id: string) => void;
};

export const useCartStore = create<CartType>()((set) => ({
  carts: [],
  setCarts: (data: Product[]) => set(() => ({ carts: data })),
  updateQuantity: (id: string, quantityType: QuantityType) => {
    const currentCart = getStorage(STORAGE_KEY.CART_KEY) || [];
    const updatedCart = currentCart.map((item: Product) => {
      switch (quantityType) {
        case QuantityType.increment:
          return item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        case QuantityType.decrement:
          return item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        default:
          return item;
      }
    });
    setStorage(STORAGE_KEY.CART_KEY, updatedCart);
    set({ carts: updatedCart });
  },

  deleteCart: (id: string) => {
    const currentCart = getStorage(STORAGE_KEY.CART_KEY) || [];
    const updatedCart = currentCart.filter((item: Product) => item.id !== id);
    setStorage(STORAGE_KEY.CART_KEY, updatedCart);
    set({ carts: updatedCart });
  }
}));
