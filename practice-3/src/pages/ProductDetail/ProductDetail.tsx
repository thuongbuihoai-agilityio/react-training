import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Price from "../../components/Price/Price";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import "./productDetail.css";
import Text from "../../components/Text/Text";
import { ProductUpdateProps } from "../../types/product";

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const { id } = useParams();
  const { product } = location.state as ProductUpdateProps;

  if(!product) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="productDetails">
        <div className="productDetails__img--left">
          <img
            className="product__image"
            src={product.images[0]}
          />
        </div>
        <div className="productDetails__img--right">
          {product.images.map((img: string) =>
            <img
              key={product.id}
              src={img}
              alt="This is image"
            />
            )
          }
        </div>
        <div className="productDetails__info">
          <div className="productDetail__update">
            <Price value={product.price} />
            <Button text="Update" />
          </div>
          <Title text={product.name} />
          <input className="productDetails__input" min={0} type="number" value="2" />
          <Text text={product.description} />
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
