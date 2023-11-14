// Libs
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// Stores
import { useCartStore } from '@stores/cart';

describe('useCartStore', () => {
  beforeEach(() => {
    (localStorage as any) = {};
  });

  test('should deleteCart is called', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => result.current.deleteCart('1'));

    expect(result.current.carts).toEqual([]);
  });
});
