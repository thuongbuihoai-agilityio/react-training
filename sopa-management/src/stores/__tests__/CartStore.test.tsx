// Libs
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// Stores
import { useCartStore } from '../cart';

// Mocks
import { MOCK_PRODUCT } from '../../__mocks__/product';

// Constants
import { STORAGE_KEY } from '../../constants/common';

// Helpers
import { getStorage } from '../../helpers/storage';

describe('useCartStore', () => {
  beforeEach(() => {
    (localStorage as any) = {};
  });

  test('should add product to cart if it does not already exist', () => {
    const { result } = renderHook(() => useCartStore());
    const product = MOCK_PRODUCT;

    act(() => {
      result.current.addToCart(product);
    });

    const storedCart = getStorage(STORAGE_KEY.CART_KEY);
    const updatedCart = result.current.carts;

    expect(storedCart).toEqual(updatedCart);
  });

  test('should update product quantity in cart if it already exists', () => {
    const { result } = renderHook(() => useCartStore());
    const product = MOCK_PRODUCT;

    act(() => {
      result.current.addToCart(product);
    });

    const storedCart = getStorage(STORAGE_KEY.CART_KEY);
    const updatedCart = result.current.carts;

    expect(storedCart).toEqual(updatedCart);
  });

  test('should increase product quantity in cart', () => {
    const { result } = renderHook(() => useCartStore());

    useCartStore.getState().increaseQuantity('1');
    act(() => result.current.increaseQuantity());
    expect(useCartStore.getState().increaseQuantity('2'))
  });

  test('should decrement product quantity in cart', () => {
    const { result } = renderHook(() => useCartStore());

    useCartStore.getState().decreaseQuantity('2');
    act(() => result.current.decreaseQuantity());
    expect(useCartStore.getState().decreaseQuantity('1'))
  });

  test('should deleteCart is called', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => result.current.deleteCart('1'));

    expect(result.current.carts).toEqual([]);
  });
});
