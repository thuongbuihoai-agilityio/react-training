import React from "react";
import { Link } from "react-router-dom";
import Price from "../../../components/Price/Price";
import Title from "../../common/Title/Title";
import Text from "../../../components/Text/Text";
import { ProductItemProps } from "@/types/product";
import "./viewProductItem.css"

const ViewProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <>
      <div className="productViewPage">
        <img
          className="productViewPage__image"
          src={product.images[0]}
        />
        <div className="productViewPage__content">
          <Link className="productViewPage__link" state={{ product }} to={`/product/${product.id}`}>
            <Title className="productViewPage__title" text={product.name} />
          </Link>
          <Text className="productViewPage__description" text={product.description} />
          <Price className="productViewPage__price" value={product.price} />
        </div>
      </div>
    </>
  );
}

export default ViewProductItem;
