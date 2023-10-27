// Mocks
import { MOCK_ACCOUNTS } from '../../__mocks__/account';
import { MOCK_PRODUCTS } from '../../__mocks__/product';
import {
  InputTheme,
  InputType
} from '../../components/common/Input';

// Interface
import { Product } from '../../interfaces/product';

// Helpers
import {
  checkEmail,
  checkLogin,
  checkPassword,
  checkValidationStyles,
  totalPrices
} from '../common';

describe('Test common', () => {
  test('should return 0 if the carts array is empty', () => {
    const carts: Product[] = [];
    const result = totalPrices(carts);
    expect(result).toBe(0);
  });

  test('should calculate the total prices correctly', () => {
    const carts = MOCK_PRODUCTS;
    const result = totalPrices(carts);
    expect(result).toBe(2 * 87 + 1 * 45);
  });

  test('checkLogin should return true for valid credentials', () => {
    expect(checkLogin(MOCK_ACCOUNTS, 'example@gmail.com', '123456')).toBe(true);
  });

  test('checkLogin should return false for invalid credentials', () => {
    expect(checkLogin(MOCK_ACCOUNTS, 'example@gmail.com', '123')).toBe(false);
  });

  test('checkEmail should return true for existing email', () => {
    expect(checkEmail(MOCK_ACCOUNTS, 'example@gmail.com')).toBe(true);
  });

  test('checkEmail should return false for non-existing email', () => {
    expect(checkEmail(MOCK_ACCOUNTS, 'user@example.com')).toBe(false);
  });

  test('checkPassword should return true for existing password', () => {
    expect(checkPassword(MOCK_ACCOUNTS, '123456')).toBe(true);
  });

  test('checkPassword should return false for non-existing password', () => {
    expect(checkPassword(MOCK_ACCOUNTS, '12')).toBe(false);
  });

  test('checkValidationStyles should return the correct style and theme error', () => {
    const serverError = true;
    const rules = { type: 'required', message: 'This field is required' };
    const isDirty = true;

    const { style, theme } = checkValidationStyles(serverError, rules, isDirty);
    expect(style).toBe(InputType.error);
    expect(theme).toBe(InputTheme.error);
  });

  test('checkValidationStyles should return the correct style and theme for info', () => {
    const serverError = false;
    const rules = undefined;
    const isDirty = true;

    const { style, theme } = checkValidationStyles(serverError, rules, isDirty);
    expect(style).toBe(InputType.info);
    expect(theme).toBe(InputTheme.info);
  });

  test('checkValidationStyles should return the correct style and theme for default', () => {
    const serverError = false;
    const rules = undefined;
    const isDirty = false;

    const { style, theme } = checkValidationStyles(serverError, rules, isDirty);
    expect(style).toBe(InputType.default);
    expect(theme).toBe(InputTheme.default);
  });
});
