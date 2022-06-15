import React, { useCallback, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Price from "@/components/Price/Price";
import Title from "@/components/common/Title/Title";
import Text from "@/components/Text/Text";
import ModalUpdate from "@/components/Modal/ModalUpdate/ModalUpdate";
import { ProductContext } from "@/context/ProductContext";
import { Product } from "@/types/product";
import "./productDetail.css";
import { toast } from "react-toastify";

const ProductDetails: React.FC = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const dataEl = products?.find((item: { id: string }) => item.id === id);
  const [productDetailNew, setProductDetailNew] = useState(dataEl);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const updateProductDetail = (response: Product) => {
    try {
      setProductDetailNew(response);
    } catch (error) {
      toast.error(error as string);
    }
  }

  const toggleModalUpdate = useCallback(() => {
    setOpenModalUpdate(!openModalUpdate);
  }, [openModalUpdate]);

  return (
    <>
      <div data-testid="product-detail-page" className="productDetails">
        <div className="productDetails__img--left">
          <img className="product__image" src={productDetailNew?.images[0]} />
        </div>
        <div className="productDetails__img--right">
          {productDetailNew?.images.map((img: string, key: number) => (
            <img key={key} src={img} alt="This is image" />
          ))}
        </div>
        <div className="productDetails__info">
          <div className="productDetail__update">
            <Title
              className="productDetail__title"
              text={productDetailNew?.name}
            />
            <button
              data-testid="open-modal-update"
              className="btn btn__update"
              onClick={toggleModalUpdate}
            >
              <i className="fa fa-pen"></i>
            </button>
          </div>
          <Price
            className="productDetail__price"
            value={productDetailNew?.price}
          />
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
          hideModalUpdate={toggleModalUpdate}
          updateProductDetail={updateProductDetail}
          deleteImage={() => {}}
        />
      )}
    </>
  );
};

export default ProductDetails;
