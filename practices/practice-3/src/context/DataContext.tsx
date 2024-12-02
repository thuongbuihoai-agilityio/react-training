import { ACTION } from "@/constants/message";
import useSWR, { mutate } from "swr";
import { reducer } from "@/reducer/dataReducer";
import { getData } from "@/helpers/fetchApi";
import { PRODUCTS_URL } from "@/constants/url";
import { createContext, useContext, useMemo, useReducer } from "react";
import { Product, ProductContext } from "@/types/product";
import {SearchContext} from "./SearchContext";

const DEFAULT_STATE: ProductContext = {
  data: [],
  mutate
};

export const DataContext = createContext<ProductContext>(DEFAULT_STATE);
const DataProvider: React.FC<{children: JSX.Element[] | JSX.Element}> = ({ children }) => {
  const { searchValue } = useContext(SearchContext);
  // URLSearchParams: convert searchValue to string => handle search
  const queryParams: URLSearchParams = new URLSearchParams(searchValue);
  const { data, mutate } = useSWR(PRODUCTS_URL + "?" + queryParams.toString(), getData<Product[]>);
  const [dispatch] = useReducer(reducer, data);

  const value = useMemo(() => ({
    data,
    mutate,
    getProduct: (data: Product) => {
      dispatch({action: ACTION.GET_DATA, data});
    }
  }), [data]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;