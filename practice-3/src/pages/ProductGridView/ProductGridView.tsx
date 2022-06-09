import useSWR, { Key } from "swr";
import React, { useCallback, useContext, useState } from "react";
import ModalCreate from "@/components/Modal/ModalCreate/ModalCreate";
import Button from "@/components/common/Button/Button";
import { Product } from "@/types/product";
import ProductGridCard from "../ProductGridCard/ProductGridCard";
import { SearchContext } from "@/context/SearchContext";
import { PRODUCTS_URL, PRODUCT_CRUD } from "@/constants/url";
import { create, get, remove } from "@/helpers/fetchApi";
import { toast } from "react-toastify";
import { SUCCESS_MSG } from "@/constants/message";
import "./productGridView.css";

const ProductGridView: React.FC = () => {
  const renderId = new Date();
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const { searchValue } = useContext(SearchContext);
  const queryParams: URLSearchParams = new URLSearchParams(searchValue);
  const key: Key = PRODUCTS_URL + queryParams.toString();
  const fetcher = () => get<Product[]>(key);
  const { data, mutate } = useSWR(key, fetcher);
  const createProduct = async (productData: Product) => {
    const newProduct: Product = {
      id: renderId.valueOf.toString(),
      categoryId: productData.categoryId,
      name: productData.name,
      price: +productData.price,
      quantity: +productData.quantity,
      description: productData.description,
      images: productData.images,
    };
    create(PRODUCT_CRUD, newProduct);
    mutate();
    toast.success(SUCCESS_MSG.MESSAGE_ADD_PRODUCT);
  };

  const deleteProduct = async (id: string) => {
    remove(`${PRODUCT_CRUD}/${id}`);
    mutate();
    toast.success(SUCCESS_MSG.MESSAGE_DELETE_PRODUCT);
  };

  const toggleModalUpdate = useCallback(() => {
    setOpenModalCreate(!openModalCreate);
  }, [openModalCreate]);

  return (
    <>
      <div data-testid="product-gird-view" className="product__list">
        <button data-testid="open-modal" onClick={toggleModalUpdate} className="btn btn__add">
          Add new product
        </button>
        <div data-testid="delete-product" className="product__info">
          {data?.map((product: Product) => (
            <div className="product__item" key={product.id}>
              <ProductGridCard
                deleteProduct={deleteProduct}
                product={product}
              />
            </div>
          ))}
        </div>
        {openModalCreate && (
          <ModalCreate
            createProduct={createProduct}
            hideModalCreate={toggleModalUpdate}
          />
        )}
      </div>
    </>
  );
};

export default ProductGridView;
