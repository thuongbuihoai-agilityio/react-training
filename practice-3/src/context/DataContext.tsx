import useSWR from "swr";
import toast from "react-hot-toast";
import { getData } from "@helpers/fetchApi";
import { PRODUCTS_URL } from "@constants/url";
import { SearchContext } from "./SearchContext";
import { Product, ProductContext } from "@common-types/product";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const DataContext = createContext<ProductContext>({} as ProductContext);
const DataProvider: React.FC<{children: JSX.Element[] | JSX.Element}> = ({ children }) => {
  const { searchValue } = useContext(SearchContext);
  // URLSearchParams: convert searchValue to string => handle search
  const queryParams: URLSearchParams = new URLSearchParams(searchValue);
  const { data, mutate } = useSWR(PRODUCTS_URL + "?" + queryParams.toString(), getData<Product[]>);
  const [products, setProducts] = useState<Product[]>([]);

  const getDataProducts = async () => {
    try {
      setProducts(data as Product[]);
    } catch (error) {
      toast.error(error as string);
    }
  }

  useEffect(() => {
    getDataProducts()
  }, [data])

  const value = useMemo(() => ({
    mutate,
    products,
    setProducts,
  }), [products]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;