import React from "react";
import Price from "../../../components/Price/Price";
import Title from "../../../components/Title/Title";
import url from "../../../assets/images/products/black-forest-cake.jpg";
import Text from "../../../components/Text/Text";
import "./viewProductItem.css"
import Button from "../../../components/Button/Button";

const ViewProductItem: React.FC = () => {
  return (
    <>
      <div className="productViewPage">
        <img
          className="productViewPage__image"
          src={url} 
        />
        <div className="productViewPage__content">
          <Title className="productViewPage__title" text="Sourdough" />
          <Text className="productViewPage__description" text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." />
          <Price value="3.99" />
        </div>
      </div>
      <Button className="btn btn__secondary" text="VIEW ALL PRODUCTS" />
    </>
  );
}

export default ViewProductItem;
