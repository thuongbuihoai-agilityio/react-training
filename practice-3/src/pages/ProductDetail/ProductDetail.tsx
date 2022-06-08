import axios from "axios";
import React, { useCallback, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Price from "@/components/Price/Price";
import Button from "@/components/common/Button/Button";
import Title from "@/components/common/Title/Title";
import Text from "@/components/Text/Text";
import ModalUpdate from "@/components/Modal/ModalUpdate/ModalUpdate";
import { PRODUCT_CRUD } from "@/constants/url";
import { ProductContext } from "@/context/ProductContext";
import "./productDetail.css";

const ProductDetails: React.FC = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const [isReload, setIsReLoad] = useState(false);
  const dataEl = products?.find((item: { id: string }) => item.id === id);
  const [productDetailNew, setProductDetailNew] = useState(dataEl);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const toggleModalUpdate = useCallback(() => {
    setOpenModalUpdate(!openModalUpdate);
  }, [openModalUpdate]);

  async function fetchMyAPI() {
    const result = await axios
    .get(`${PRODUCT_CRUD}/${id}`)
    .then((res) => {
      setProductDetailNew(res.data);
    })
    .catch(function (error) {
      alert(error);
    });
  }

  useEffect(() => {
    if(id) {
      fetchMyAPI();
    }
  }, [isReload]);

  return (
    <>
      <div data-testid="product-detail-page" className="productDetails">
        <div className="productDetails__img--left">
          <img className="product__image" src={productDetailNew?.images[0]} />
        </div>
        <div className="productDetails__img--right">
          {productDetailNew?.images.map((img: string, index: number) => (
            <img key={index} src={img} alt="This is image" />
          ))}
        </div>
        <div className="productDetails__info">
          <div className="productDetail__update">
            <Title className="productDetail__title" text={productDetailNew?.name} />
            <Button
              onClick={toggleModalUpdate}
              className="btn btn__update"
              text={<i className="fa fa-pen"></i>}
            />
          </div>
          <Price className="productDetail__price" value={productDetailNew?.price} />
          <input
            className="productDetails__input"
            min={0}
            type="number"
            value={productDetailNew?.quantity}
          />
          <Text text={productDetailNew?.description} />
        </div>
      </div>
      {openModalUpdate && (
        <ModalUpdate
          product={productDetailNew}
          isReload={isReload}
          setIsReLoad={setIsReLoad}
          hideModalUpdate={toggleModalUpdate}
        />
      )}
    </>
  );
};

export default ProductDetails;
