import { create } from 'zustand';

// Interfaces
import { Product } from '@interfaces/product';

// Helpers
import { getStorage, setStorage } from '@helpers/storage';

// Constants
import { STORAGE_KEY } from '@constants/common';
import { QuantityType } from '@interfaces/cart';

type CartType = {
  cart: Product[];
  setCart: (value: Product[]) => void;
  addToCart: (product: Product, size: string) => void;
  updateQuantity: (id: string, quantityType: QuantityType) => void;
  deleteCart: (id: string) => void;
};

export const useCartStore = create<CartType>()((set) => ({
  cart: [],
  setCart: (data: Product[]) => set(() => ({ cart: data })),
  addToCart: (product: Product, size: string) => {
    set((state) => {
      const currentCart = state.cart || [];
      const existingProduct = currentCart.find(
        (item: Product) => item.id === product.id && item.size === size
      );

      let updatedCart;
      if (existingProduct) {
        updatedCart = currentCart.map((item: Product) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...currentCart, { ...product, quantity: 1, size: size }];
      }

      set({ cart: updatedCart });
      return { cart: updatedCart };
    });
  },

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
    set({ cart: updatedCart });
  },

  deleteCart: (id: string) => {
    const currentCart = getStorage(STORAGE_KEY.CART_KEY) || [];
    const updatedCart = currentCart.filter((item: Product) => item.id !== id);
    setStorage(STORAGE_KEY.CART_KEY, updatedCart);
    set({ cart: updatedCart });
  }
}));
