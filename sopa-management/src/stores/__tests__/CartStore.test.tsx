// Libs
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// Stores
import { useCartStore } from '@stores/cart';

// Mocks
import { MOCK_PRODUCT } from '@mocks/product';

// Constants
import { STORAGE_KEY } from '@constants/common';

// Helpers
import { getStorage } from '@helpers/storage';

// Interfaces
import { QuantityType } from '@interfaces/cart';

describe('useCartStore', () => {
  beforeEach(() => {
    (localStorage as any) = {};
  });

  test('should add product to cart if it does not already exist', () => {
    const { result } = renderHook(() => useCartStore());
    const product = MOCK_PRODUCT;

    act(() => {
      result.current.addToCart(product, 'small');
    });

    const storedCart = getStorage(STORAGE_KEY.CART_KEY);
    const updatedCart = result.current.carts;

    expect(storedCart).toEqual(updatedCart);
  });

  test('should update product quantity in cart if it already exists', () => {
    const { result } = renderHook(() => useCartStore());
    const product = MOCK_PRODUCT;

    act(() => {
      result.current.addToCart(product, 'small');
    });

    const storedCart = getStorage(STORAGE_KEY.CART_KEY);
    const updatedCart = result.current.carts;

    expect(storedCart).toEqual(updatedCart);
  });

  test('should increase product quantity in cart', () => {
    const { result } = renderHook(() => useCartStore());

    useCartStore.getState().updateQuantity('1', QuantityType.increment);
    act(() => result.current.updateQuantity('1', QuantityType.increment));
    expect(useCartStore.getState().updateQuantity('2', QuantityType.increment))
  });

  test('should decrement product quantity in cart', () => {
    const { result } = renderHook(() => useCartStore());

    useCartStore.getState().updateQuantity('2', QuantityType.decrement);
    act(() => result.current.updateQuantity('2', QuantityType.decrement));
    expect(useCartStore.getState().updateQuantity('1', QuantityType.decrement))
  });

  test('should deleteCart is called', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => result.current.deleteCart('1'));

    expect(result.current.carts).toEqual([]);
  });
});
