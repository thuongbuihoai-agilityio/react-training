import { create } from 'zustand';
import toast from "react-hot-toast";

// Interfaces
import { Product } from '@interfaces/product';

// Helpers
import {
  getStorage,
  setStorage
} from '@helpers/storage';

// Constants
import { STORAGE_KEY } from '@constants/common';
import { CONFIRM_MESSAGE } from '@constants/validate';

type CartType = {
  carts: Product[];
  addToCart: (product: Product, size: string) => void;
  increaseQuantity: (id?: string) => void;
  decreaseQuantity: (id?: string) => void;
  deleteCart: (id?: string) => void;
};

export const useCartStore = create<CartType>()((set) => ({
  carts: getStorage(STORAGE_KEY.CART_KEY) || [],
  addToCart: (product: Product, size: string) => {
    const currentCart = getStorage(STORAGE_KEY.CART_KEY) || [];
    const existingProduct = currentCart.find(
      (item: Product) => item.id === product.id && item.size === size
    );

    if (existingProduct) {
      const updatedCart = currentCart.map((item: Product) =>
        item.id === product.id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setStorage(STORAGE_KEY.CART_KEY, updatedCart);
      set({ carts: updatedCart });
      toast.success(CONFIRM_MESSAGE.ADD_SUCCESS);
    } else {
      const updatedCart = [
        ...currentCart,
        { ...product, quantity: 1, size: size }
      ];
      setStorage(STORAGE_KEY.CART_KEY, updatedCart);
      set({ carts: updatedCart });
      toast.success(CONFIRM_MESSAGE.ADD_SUCCESS)
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
    toast.success(CONFIRM_MESSAGE.DELETE_SUCCESS)
  },
}));
