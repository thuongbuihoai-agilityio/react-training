import { PRODUCTS_URL, PRODUCT_CRUD } from "../constants/url";
import { get, remove } from "../helpers/fetchApi";
import useSWR from "swr";

export default function useProducts() {
  const { data, error } = useSWR(PRODUCTS_URL, get, { refreshInterval: 1000 });

  const deleteProduct = async (id: string) => {
    remove(`${PRODUCT_CRUD}/${id}`);
  };

  return {
    products: data,
    error,
    deleteProduct
  }
}