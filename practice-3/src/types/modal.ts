import { Product } from "./product";

export interface ModalDeleteProps {
  id: string;
  hideModalDelete: () => void;
  deleteProduct: (id: string) => void;
}

export interface ModalUpdateProps {
  product: Product;
  isReload: Boolean;
  setIsReLoad: Function;
  hideModalUpdate: () => void;
}

export interface ModalCreateProps {
  hideModalCreate: Function;
  createProduct: (dataProduct: Product) => void;
}