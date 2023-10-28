// Mocks
import { MOCK_PRODUCTS } from '@mocks/product';

// Interface
import { Product } from '@interfaces/product';

// Helpers
import { totalPrices } from '../common';

describe('totalPrices', () => {
  it('should return 0 if the carts array is empty', () => {
    const carts: Product[] = [];
    const result = totalPrices(carts);
    expect(result).toBe(0);
  });

  it('should calculate the total prices correctly', () => {
    const carts = MOCK_PRODUCTS;
    const result = totalPrices(carts);
    expect(result).toBe(2 * 87 + 1 * 45);
  });
});
