import { ProductContext } from "@common-types/product";
import { createContext, useMemo, useReducer, useState } from "react";
import { dataReduce, initialState } from "@reducer/dataReducer";

export const DataContext = createContext<ProductContext>({} as ProductContext);
const DataProvider: React.FC<{children: JSX.Element[] | JSX.Element}> = ({ children }) => {
  // const { searchValue } = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState("");
  const [state, dispatch] = useReducer(dataReduce, initialState);
  const { products } = state;
  console.log("products", products);
  
  const value = useMemo(() => ({
    products,
    dispatch,
    searchValue,
    setSearchValue,
  }), [products]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;