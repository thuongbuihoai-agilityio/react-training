import React from "react";
import Title from "../../components/Title/Title";
import url from "../../assets/images/products/black-forest-cake.jpg";
import Price from "../../components/Price/Price";
import "./productItem.css"

const ProductItem: React.FC = () => {
  return (
    <div className="product">
      <img
        className="product__image"
        src={url}
      />
      <div className="product__content">
        <Title className="product__title" text="Sourdough" />
        <Price value="3.99" />
      </div>
    </div>
  );
}

export default ProductItem;
