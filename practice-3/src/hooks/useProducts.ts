import { PRODUCTS_URL, PRODUCT_CRUD } from "../constants/url";
import { get, remove } from "../helpers/fetchApi";
import useSWR from "swr";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export default function useProducts() {
  const {filterInput} = useContext(FilterContext);

  const filter = {
    ...filterInput,
  };

  const queryParams: URLSearchParams = new URLSearchParams(filter);

  const { data, error } = useSWR(PRODUCTS_URL + queryParams.toString(), get, { refreshInterval: 1000 });

  const deleteProduct = async (id: string) => {
    remove(`${PRODUCT_CRUD}/${id}`);
  };

  return {
    products: data,
    error,
    deleteProduct
  }
}