import useSWR, { Key } from "swr";
import React, { useCallback, useContext, useEffect, useState } from "react";
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
import { ProductContext } from "@/context/ProductContext";

const ProductGridView: React.FC = () => {
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const { searchValue } = useContext(SearchContext);
  const { setData } = useContext(ProductContext);
  const filter = {
    searchValue,
  };

  const queryParams: URLSearchParams = new URLSearchParams(filter);
  const key: Key = PRODUCTS_URL + queryParams.toString();
  const fetcher = () => get<Product[]>(PRODUCTS_URL)
  const { data, mutate } = useSWR(key, fetcher);

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
    create(PRODUCT_CRUD, newProduct);
    mutate();
    toast.success(SUCCESS_MSG.MESSAGE_ADD_PRODUCT);
  };

  const deleteProduct = async (id: string) => {
    remove(`${PRODUCT_CRUD}/${id}`);
    mutate();
    toast.success(SUCCESS_MSG.MESSAGE_DELETE_PRODUCT);
  };

  useEffect(() => {
    setData(data);
  }, [data]);

  const handleOpenModalUpdate = useCallback(() => {
    setOpenModalUpdate(true);
  }, []);

  return (
    <>
      <div data-testid="product-gird-view" className="product__list">
        <Button
          onClick={handleOpenModalUpdate}
          className="btn btn__add"
          text="Add new product"
        />
        <div className="product__info">
          {data?.map((product: Product) => (
            <div className="product__item" key={product.id}>
              <ProductGridCard
                deleteProduct={deleteProduct}
                product={product}
              />
            </div>
          ))}
        </div>
        {openModalUpdate && (
          <ModalCreate
            createProduct={createProduct}
            hideModalCreate={setOpenModalUpdate}
          />
        )}
      </div>
    </>
  );
};

export default ProductGridView;
