import { KeyedMutator } from "swr";

export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  quantity: number;
  categoryId: string;
  description: string;
  product?: {};
}

export interface ProductItemProps {
  product: Product;
  deleteProduct: (id: string) => void;
}

export interface ProductCardProps {
  product: Product;
}

export interface ProductContext {
  data: Product[] | undefined;
  mutate: KeyedMutator<Product[]>;
  getProduct?: (data: Product) => void;
}

export interface ProductContextProps extends ProductContext{
  setProducts?: Function;
}