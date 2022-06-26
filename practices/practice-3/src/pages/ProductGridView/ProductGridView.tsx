import toast from "react-hot-toast";
import { Product } from "@/types/product";
import { SUCCESS_MSG } from "@/constants/message";
import { create, remove } from "@/helpers/fetchApi";
import { PRODUCTS_URL } from "@/constants/url";
import ProductGridCard from "../ProductGridCard/ProductGridCard";
import React, { useCallback, useContext, useState } from "react";
import ModalCreate from "@/components/Modal/ModalCreate/ModalCreate";
import ScrollButton from "@/components/common/Button/ScrollButton/ScrollButton";
import { DataContext } from "@/context/DataContext";
import "./productGridView.css";

const ProductGridView: React.FC = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const { products, mutate } = useContext(DataContext);

  // create product
  const createProduct = async (productData: Product) => {
    const newProduct: Product = {
      id: new Date().valueOf().toString(),
      categoryId: productData.categoryId,
      name: productData.name,
      price: +productData.price,
      quantity: +productData.quantity,
      description: productData.description,
      images: productData.images,
    };
    try {
      await create(PRODUCTS_URL, newProduct);
      mutate();
      toast.success(SUCCESS_MSG.MESSAGE_ADD_PRODUCT);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  // delete product
  const deleteProduct = async (id: string) => {
    try {
      await remove(`${PRODUCTS_URL}/${id}`);
      mutate();
      toast.success(SUCCESS_MSG.MESSAGE_DELETE_PRODUCT);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  // handle toggle modal create
  const toggleModalCreate = useCallback(() => {
    setOpenModalCreate(!openModalCreate);
  }, [openModalCreate]);

  return (
    <>
      <div data-testid="product-gird-view" className="product__list">
        <button
          data-testid="open-modal"
          className="btn btn__add"
          onClick={toggleModalCreate}
        >
          Add new product
        </button>
        <div data-testid="delete-product" className="product__info">
          {products?.map((product: Product) => (
            <div className="product__item" key={product.id}>
              <ProductGridCard
                product={product}
                deleteProduct={deleteProduct}
              />
            </div>
          ))}
        </div>
        {openModalCreate && (
          <ModalCreate
            createProduct={createProduct}
            hideModalCreate={toggleModalCreate}
          />
        )}
      </div>
      <ScrollButton className="btn__backToTop" text={<i className="fa fa-arrow-alt-circle-up"></i>} />
    </>
  );
};

export default ProductGridView;
