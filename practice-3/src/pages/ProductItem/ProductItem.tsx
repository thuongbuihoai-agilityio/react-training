import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import Price from "../../components/Price/Price";
import { ProductItemProps } from "../../types/product";
import "./productItem.css"

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product">
      <img
        className="product__image"
        src={product.images[0]}
      />
      <div className="product__content">
        <Link className="productViewPage__link" state={{ product }} to={`/product/${product.id}`}>
          <Title className="productViewPage__title" text={product.name} />
        </Link>
        <Price value={product.price} />
      </div>
    </div>
  );
}

export default ProductItem;
