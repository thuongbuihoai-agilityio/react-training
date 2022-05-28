import { CATEGORIES_URL } from "../constants/url";
import { get } from "../helpers/fetchApi";
import useSWR from "swr";


export default function useCategories() {
  const { data, error } = useSWR(CATEGORIES_URL, get, { refreshInterval: 1000 });

  return {
    categories: data,
    error
  }
}