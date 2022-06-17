import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Price from "@/components/Price/Price";
import Title from "@/components/common/Title/Title";
import Text from "@/components/Text/Text";
import ModalUpdate from "@/components/Modal/ModalUpdate/ModalUpdate";
import { Product } from "@/types/product";
import { toast } from "react-toastify";
import { PRODUCT_CRUD } from "@/constants/url";
import "./productDetail.css";

const ProductDetails: React.FC = () => {
  // use useParams to get id
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  // update product detail
  const updateProductDetail = (response: Product) => {
    try {
      setProduct(response);
    } catch (error) {
      toast.error(error as string);
    }
  };

  // handle toggle modal update
  const toggleModalUpdate = useCallback(() => {
    setOpenModalUpdate(!openModalUpdate);
  }, [openModalUpdate]);

  // fetch data by id
  const fetchDataById = async () => {
    try {
      const response = await axios.get(PRODUCT_CRUD + `${id}`);
      setProduct(response.data);
    } catch (error) {
      toast.error(error as string);
    }
  };
  useEffect(() => {
    fetchDataById();
  }, []);

  return (
    <>
      <div data-testid="product-detail-page" className="productDetails">
        <div className="productDetails__img--left">
          <img className="product__image" src={product?.images[0]} />
        </div>
        <div className="productDetails__img--right">
          {product?.images.map((img: string, key: number) => (
            <img key={key} src={img} alt="This is image" />
          ))}
        </div>
        <div className="productDetails__info">
          <div className="productDetail__update">
            <Title
              className="productDetail__title"
              text={product?.name ?? ""}
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
            value={product?.price ?? +""}
          />
          <input
            className="productDetails__input"
            min={0}
            type="number"
            defaultValue={product?.quantity}
          />
          <Text text={product?.description ?? ""} />
        </div>
      </div>
      {openModalUpdate && (
        <ModalUpdate
          product={product!}
          hideModalUpdate={toggleModalUpdate}
          updateProductDetail={updateProductDetail}
          deleteImage={() => {}}
        />
      )}
    </>
  );
};

export default ProductDetails;
