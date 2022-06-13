import { createContext, useState } from "react";

export const ProductContext = createContext<any>({});
const ProductProvider: React.FC<{children: JSX.Element[] | JSX.Element}> = ({ children }) => {
const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;
