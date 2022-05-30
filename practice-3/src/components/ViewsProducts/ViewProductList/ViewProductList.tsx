import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/common/Button/Button";
import useProducts from "@/hooks/useProducts";
import { Product } from "@/types/product";
import ViewProductItem from "../ViewProductItem/ViewProductsItem";
import "./viewProductList.css";

const ViewProductList: React.FC = () => {
  const { products } = useProducts();

  return (
    <>
      <div className="viewProduct__list">
        {products?.map((product: Product) => <div className="viewProduct__item" key={product.id}>
          <ViewProductItem product={product} deleteProduct={() => {}} />
        </div>
        )}
      </div>
      <Link className="viewProduct__link" to="/products">
        <Button className="btn btn__secondary" text="VIEW ALL PRODUCTS" />
      </Link>
    </>
  );
}

export default ViewProductList;
