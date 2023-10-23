// Mocks
import { MOCK_PRODUCTS } from '../../__mocks__/product';
import { STORAGE_KEY } from '../../constants/common';

// Helpers
import {
  clearStorage,
  getStorage,
  setStorage
} from '../storage';

describe('localStorage functions', () => {
  beforeEach(() => {
    (localStorage as any) = {};
  });

  test('should set data in localStorage', () => {
    const data = MOCK_PRODUCTS;
    setStorage(STORAGE_KEY.CART_KEY, data);
    expect(localStorage[STORAGE_KEY.CART_KEY]).toBe(JSON.stringify(data));
  });

  test('should get data from localStorage', () => {
    const data = MOCK_PRODUCTS;
    localStorage[STORAGE_KEY.CART_KEY] = JSON.stringify(data);
    const result = getStorage(STORAGE_KEY.CART_KEY);
    expect(result).toEqual(data);
  });

  test('should clear localStorage', () => {
    localStorage[STORAGE_KEY.CART_KEY] = STORAGE_KEY.CART_KEY;
    clearStorage();
    expect(localStorage[STORAGE_KEY.CART_KEY]).toBeUndefined();
  });
});
