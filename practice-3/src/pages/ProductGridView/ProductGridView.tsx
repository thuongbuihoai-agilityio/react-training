import useSWR from "swr";
import toast from "react-hot-toast";
import { Product } from "@/types/product";
import { SUCCESS_MSG } from "@/constants/message";
import { SearchContext } from "@/context/SearchContext";
import { create, getData, remove } from "@/helpers/fetchApi";
import { PRODUCTS_URL } from "@/constants/url";
import ProductGridCard from "../ProductGridCard/ProductGridCard";
import React, { useCallback, useContext, useState } from "react";
import ModalCreate from "@/components/Modal/ModalCreate/ModalCreate";
import ScrollButton from "@/components/common/Button/ScrollButton/ScrollButton";
import "./productGridView.css";

const ProductGridView: React.FC = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const { searchValue } = useContext(SearchContext);

  // URLSearchParams: convert searchValue to string => handle search
  const queryParams: URLSearchParams = new URLSearchParams(searchValue);
  const { data, mutate } = useSWR(PRODUCTS_URL + "?" + queryParams.toString(), getData<Product[]>);

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
    } catch (error) {
      toast.error((error as any).message);
    }
  };

  // delete product
  const deleteProduct = async (id: string) => {
    try {
      await remove(`${PRODUCTS_URL}/${id}`);
      mutate();
      toast.success(SUCCESS_MSG.MESSAGE_DELETE_PRODUCT);
    } catch (error) {
      toast.error((error as any).message);
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
          {data?.map((product: Product) => (
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
