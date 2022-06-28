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
  products: Product[];
  dispatch: Function,
  searchValue: string;
  setSearchValue: Function;
}