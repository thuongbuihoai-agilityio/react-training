import { createContext, useState } from "react";

export const ProductContext = createContext<any>({});
const ProductProvider: React.FC<{children: JSX.Element[] | JSX.Element}> = ({ children }) => {
const [data, setData] = useState([]);

  return (
    <ProductContext.Provider value={{ data, setData }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;
