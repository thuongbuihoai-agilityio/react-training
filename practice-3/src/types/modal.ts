import { FormProps } from "./form";
import { Product } from "./product";

export interface ModalDeleteProps {
  id: string;
  hideModalDelete: () => void;
  deleteProduct: (id: string) => void;
}

export interface ModalUpdateProps {
  product: Product;
  hideModalUpdate: () => void;
  deleteImage: () => void;
  updateProductDetail: (product: Product) => void;
}

export interface ModalCreateProps {
  formValues: FormProps;
  setFormValues: Function;
  hideModalCreate: () => void;
  clearValidate: () => void;
  createProduct: (dataProduct: Product) => void;
}