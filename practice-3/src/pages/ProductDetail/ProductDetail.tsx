import React from "react";
import "./productDetail.css";
import url from "../../assets/images/products/cheese-cake.jpg";
import Price from "../../components/Price/Price";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";

const ProductDetails: React.FC = () => {
  return (
    <>
      <div className="productDetails">
        <div className="productDetails__img--left">
          <img
            className="product__image"
            src={url}
          />
        </div>
        <div className="productDetails__img--right">
          <img src={url} alt="This is image" />
          <img src={url} alt="This is image" />
          <img src={url} alt="This is image" />
          <img src={url} alt="This is image" />
        </div>
        <div className="productDetails__info">
          <div className="productDetail__update">
            <Price value="3.99" />
            <Button text="Update" />
          </div>
          <Title text="Pancake" />
          <input className="productDetails__input" min={0} type="number" value="2" />
          <Text text="this is practice - 3" />
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
