export interface ModalDeleteProps {
  id: string;
  hideModalDelete: Function;
  deleteProduct: (id: string) => void;
}