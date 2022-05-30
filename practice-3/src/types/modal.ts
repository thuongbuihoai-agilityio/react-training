import { Product } from "./product";

export interface ModalDeleteProps {
  id: string;
  hideModalDelete: Function;
  deleteProduct: (id: string) => void;
}

export interface ModalUpdateProps {
  product: Product;
  hideModalUpdate: Function;
  onChangeProductDetail: (product: Product) => void;
}

export interface ModalCreateProps {
  hideModalUpdate: Function;
}