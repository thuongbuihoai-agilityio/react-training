import React, { useCallback, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Price from "@/components/Price/Price";
import Title from "@/components/common/Title/Title";
import Text from "@/components/Text/Text";
import ModalUpdate from "@/components/Modal/ModalUpdate/ModalUpdate";
import { DataContext } from "@/context/DataContext";
import { Product } from "@/types/product";
import toast from "react-hot-toast";
import "./productDetail.css";

const ProductDetails: React.FC = () => {
  // use useParams to get id
  const { id } = useParams();
  const { products, setProducts } = useContext(DataContext);
  const dataElement = products?.find((item) => item.id === id);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  // update product detail
  const updateProductDetail = (response: Product) => {
    try {
      setProducts(response as any);
    } catch (error) {
      toast.error(error as string);
    }
  };

  // handle toggle modal update
  const toggleModalUpdate = useCallback(() => {
    setOpenModalUpdate(!openModalUpdate);
  }, [openModalUpdate]);

  return (
    <>
      <div data-testid="product-detail-page" className="productDetails">
        <div className="productDetails__img--left">
          <img className="product__image" src={dataElement?.images[0]} />
        </div>
        <div className="productDetails__img--right">
          {dataElement?.images.map((img: string, key: number) => (
            <img key={key} src={img} />
          ))}
        </div>
        <div className="productDetails__info">
          <div className="productDetail__update">
            <Title className="productDetail__title" text={dataElement?.name} />
            <button
              data-testid="open-modal-update"
              className="btn btn__update"
              onClick={toggleModalUpdate}
            >
              <i className="fa fa-pen"></i>
            </button>
          </div>
          <Price className="productDetail__price" value={dataElement?.price} />
          <input
            className="productDetails__input"
            min={0}
            type="number"
            defaultValue={dataElement?.quantity}
          />
          <Text text={dataElement?.description} />
        </div>
      </div>
      {openModalUpdate && (
        <ModalUpdate
          product={dataElement!}
          hideModalUpdate={toggleModalUpdate}
          updateProductDetail={updateProductDetail}
          deleteImage={() => {}}
        />
      )}
    </>
  );
};

export default ProductDetails;
