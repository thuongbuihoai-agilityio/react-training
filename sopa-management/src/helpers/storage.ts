import { Product } from "../interfaces/product";

export const setStorage = (key: string, data: Product) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as any) || [];
};

export const clearStorage = () => {
  localStorage.clear();
};
