import { createContext, useState } from "react";
import { PRODUCT_MOCKING } from "@/constants/product";
import { Product } from "@/types/product";

export const ProductContext = createContext<any>(PRODUCT_MOCKING);
const ProductProvider: React.FC<{children: JSX.Element[] | JSX.Element}> = ({ children }) => {
const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;
