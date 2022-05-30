import React, { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import Price from "@/components/Price/Price";
import Button from "@/components/common/Button/Button";
import Title from "@/components/common/Title/Title";
import Text from "@/components/Text/Text";
import { Product, ProductUpdateProps } from "@/types/product";
import ModalUpdate from "@/components/Modal/ModalUpdate/ModalUpdate";
import "./productDetail.css";

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const { product } = location.state as ProductUpdateProps;

  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const handleOpenModalUpdate = useCallback(() => {
    setOpenModalUpdate(true);
  }, []);

  const handleChangeProductDetail = (newProduct: {}) => {
    (location.state as Product).product = newProduct;
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
          {product.images.map((img: string, index: number) =>
            <img
              key={index}
              src={img}
              alt="This is image"
            />
            )
          }
        </div>
        <div className="productDetails__info">
          <div className="productDetail__update">
            <Title className="productDetail__title" text={product.name} />
            <Button onClick={handleOpenModalUpdate} className="btn btn__update" text={<i className="fa fa-pen"></i>} />
          </div>
            <Price className="productDetail__price" value={product.price} />
          <input className="productDetails__input" min={0} type="number" value={product.quantity} />
          <Text text={product.description} />
        </div>
      </div>
      {openModalUpdate && <ModalUpdate product={product} onChangeProductDetail={handleChangeProductDetail} hideModalUpdate={setOpenModalUpdate} />}
    </>
  );
}

export default ProductDetails;
