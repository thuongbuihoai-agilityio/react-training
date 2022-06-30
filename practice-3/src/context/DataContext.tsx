import { ProductContext } from "@common-types/product";
import { createContext, useMemo, useReducer, useState } from "react";
import { dataReducer } from "@reducer/dataReducer";
import { DataState } from "@common-types/data";

const initialState: DataState = {
  products: [],
};

const DataContext = createContext<ProductContext>({} as ProductContext);
const DataProvider: React.FC<{children: JSX.Element[] | JSX.Element}> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const { products } = state;

  const value = useMemo(() => ({
    products,
    dispatch,
    searchValue,
    setSearchValue,
  }), [products, searchValue]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export {DataProvider, DataContext};