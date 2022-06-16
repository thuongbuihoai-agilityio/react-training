import React, { memo } from "react";
import { Link } from "react-router-dom";
import Price from "@/components/Price/Price";
import Text from "@/components/Text/Text";
import { ProductCardProps } from "@/types/product";
import Title from "@/components/common/Title/Title";
import "./productListCard.css";

const ProductListCard: React.FC<ProductCardProps> = memo(({ product }) => {
  return (
    <div data-testid="product-list-card" className="productViewPage">
      <img className="productViewPage__image" src={product?.images[0]} />
      <div className="productViewPage__content">
        <Link className="productViewPage__link" to={`/product/${product.id}`}>
          <Title className="productViewPage__title" text={product.name} />
        </Link>
        <Text
          className="productViewPage__description"
          text={product.description}
        />
        <Price className="productViewPage__price" value={product.price} />
      </div>
    </div>
  );
});

export default ProductListCard;
