import { FieldError } from 'react-hook-form';

// Interfaces
import { Account } from '@interfaces/account';
import { Product } from '@interfaces/product';
import {
  InputTheme,
  InputType
} from '@components/common/Input';

// Flattens an array of arrays into a single array
export const flattenArray = <T>(pages: T[][]): T[] => {
  const result: T[] = [];
  pages.forEach((page) => {
    result.push(...page);
  });

  return result;
};

// Calculate the total price
export const totalPrices = (carts: Product[]) => {
  const subTotals = carts.map((item: Product) => item.quantity * item.price);

  const total = subTotals.reduce(
    (totalPrice: number, cartItem: number) => totalPrice + cartItem,
    0
  );

  return total;
};

// Check login
export const checkLogin = (
  data?: Account[],
  email?: string,
  password?: string
) => {
  return data?.some(
    (user: Account) => user.email === email && user.password === password
  );
};

export const checkEmail = (data?: Account[], email?: string) => {
  return data?.some((user: Account) => user.email === email);
};

export const checkPassword = (data?: Account[], password?: string) => {
  return data?.some((user: Account) => user.password === password);
};

export const checkValidationStyles = (
  serverError: boolean,
  rules: FieldError | undefined,
  isDirty: boolean,
) => {
  const style = serverError || rules ? InputType.error : isDirty ? InputType.info : InputType.default;
  const theme = serverError || rules ? InputTheme.error : isDirty ? InputTheme.info : InputTheme.default

  return { style, theme };
};
