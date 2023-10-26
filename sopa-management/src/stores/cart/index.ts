import { create } from 'zustand';

// Interfaces
import { Product } from '../../interfaces/product';

// Helpers
import {
  getStorage,
  setStorage
} from '../../helpers/storage';

// Constants
import { STORAGE_KEY } from '../../constants/common';

type CartType = {
  carts: Product[];
  addToCart: (product: Product) => void;
  increaseQuantity: (id?: string) => void;
  decreaseQuantity: (id?: string) => void;
  deleteCart: (id?: string) => void;
};

export const useCartStore = create<CartType>()((set) => ({
  carts: getStorage(STORAGE_KEY.CART_KEY) || [],
  addToCart: (product: Product) => {
    const currentCart = getStorage(STORAGE_KEY.CART_KEY) || [];
    const existingProduct = currentCart.find(
      (item: Product) => item.id === product.id
    );

    if (existingProduct) {
      const updatedCart = currentCart?.map((item: Product) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setStorage(STORAGE_KEY.CART_KEY, updatedCart);
      set({ carts: updatedCart });
    } else {
      const updatedCart = [
        ...currentCart,
        { ...product, quantity: 1 }
      ] as Product[];
      setStorage(STORAGE_KEY.CART_KEY, updatedCart);
      set({ carts: updatedCart });
    }
  },

  increaseQuantity: (id?: string) => {
    const currentCart = getStorage(STORAGE_KEY.CART_KEY) || [];
    const updatedCart = currentCart.map((item: Product) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setStorage(STORAGE_KEY.CART_KEY, updatedCart);
    set({ carts: updatedCart });
  },

  decreaseQuantity: (id?: string) => {
    const currentCart = getStorage(STORAGE_KEY.CART_KEY) || [];
    const updatedCart = currentCart.map((item: Product) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setStorage(STORAGE_KEY.CART_KEY, updatedCart);
    set({ carts: updatedCart });
  },

  deleteCart: (id?: string) => {
    const currentCart = getStorage(STORAGE_KEY.CART_KEY) || [];
    const updatedCart = currentCart.filter((item: Product) => item.id !== id);
    setStorage(STORAGE_KEY.CART_KEY, updatedCart);
    set({ carts: updatedCart });
  },
}));
