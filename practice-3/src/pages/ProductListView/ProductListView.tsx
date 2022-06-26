import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Product } from "@common-types/product";
import { DataContext } from "@context/DataContext";
import Button from "@components/common/Button/Button/Button";
import ProductListCard from "../ProductListCard/ProductListCard";
import ScrollButton from "@components/common/Button/ScrollButton/ScrollButton";
import "./productListView.css";

const ProductListView: React.FC = () => {
  const { products } = useContext(DataContext);
  return (
    <>
      <div data-testid="view-product-list" className="viewProduct__list">
        {products?.map((product: Product) => (
          <div className="viewProduct__item" key={product.id}>
            <ProductListCard product={product} />
          </div>
        ))}
      </div>
      <Link className="viewProduct__link" to="/products">
        <Button className="btn btn__secondary" text="VIEW ALL PRODUCTS" />
      </Link>
      <ScrollButton className="btn__backToTop" text={<i className="fa fa-arrow-alt-circle-up"></i>} />
    </>
  );
};

export default ProductListView;
