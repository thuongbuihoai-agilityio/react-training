import React from "react";
import useProducts from "../../hooks/useProducts";
import { Product } from "../../types/product";
import ProductItem from "../ProductItem/ProductItem";
import "./productList.css";

const ProductList: React.FC = () => {
  const { products } = useProducts();
  return (
    <>
      <div className="product__list">
        {products?.map((product: Product) =>
          <div className="product__item" key={product.id}>
            <ProductItem product={product} />
          </div>
        )}
      </div>
    </>
  );
}

export default ProductList;
