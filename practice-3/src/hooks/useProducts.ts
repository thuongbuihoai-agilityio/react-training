import { PRODUCTS_URL } from "../constants/url";
import { get } from "../helpers/fetchApi";
import useSWR from "swr";


export default function useProducts() {
  const { data, error } = useSWR(PRODUCTS_URL, get, { refreshInterval: 1000 });

  return {
    products: data,
    error
  }
}