import { act, renderHook } from '@testing-library/react';
import { useProductStore } from '..';
import { MOCK_PRODUCTS } from '../../../__mocks__/product';

// Mocks

// Hooks

describe('Test useProductStore', () => {
  it('Initial value of useProductStore', () => {
    const { result } = renderHook(() => useProductStore());

    expect(result.current.products).toEqual([]);
  });

  it('Should change value of products when set products value', () => {
    const { result } = renderHook(() => useProductStore());

    expect(result.current.products).toEqual([]);
    act(() => result.current.setProducts(MOCK_PRODUCTS));
    expect(result.current.products).toEqual(MOCK_PRODUCTS);
  });
});
