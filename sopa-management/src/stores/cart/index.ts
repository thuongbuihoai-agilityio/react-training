import { create } from 'zustand';
import { Product } from '../../interfaces/product';
import { getStorage, setStorage } from '../../helpers/storage';

type CartType = {
  cart: Product[];
  deleteCart: (id: string) => void;
  addToCart: (product: Product) => void;
};

export const useCartStore = create<CartType>()((set) => ({
  cart: getStorage('cart') || [],
  deleteCart: (productId: string) => {
    // Filter out the cart with the specified ID
    set((state) => ({
      cart: state.cart.filter((cart) => cart.id !== productId)
    }));
  },
  addToCart: (product: Product) => {
    console.log('product');
    const currentCart = getStorage('cart') || [];
    const existingProduct = currentCart.find((item: Product) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = currentCart.map((item: Product) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setStorage('cart', updatedCart);
      set({ cart: updatedCart });
    } else {
      const updatedCart = [...currentCart, { ...product, quantity: 1 }];
      console.log('updatedCart', updatedCart);
      setStorage('cart', updatedCart);
      set({ cart: updatedCart });
    }
  },
}));
