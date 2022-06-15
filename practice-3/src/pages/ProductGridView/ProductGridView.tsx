import useSWR, { Key } from "swr";
import React, { useCallback, useContext, useEffect, useState } from "react";
import ModalCreate from "@/components/Modal/ModalCreate/ModalCreate";
import { Product } from "@/types/product";
import ProductGridCard from "../ProductGridCard/ProductGridCard";
import { SearchContext } from "@/context/SearchContext";
import { PRODUCTS_URL, PRODUCT_CRUD } from "@/constants/url";
import { create, get, remove } from "@/helpers/fetchApi";
import { toast } from "react-toastify";
import { SUCCESS_MSG } from "@/constants/message";
import { FormProps } from "@/types/form";
import FORM_VALUES from "@/constants/form";
import { ProductContext } from "@/context/ProductContext";
import "./productGridView.css";

const ProductGridView: React.FC = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const { searchValue } = useContext(SearchContext);
  const { setProducts } = useContext(ProductContext);
  const [formValues, setFormValues] = useState<FormProps>(FORM_VALUES);

  const queryParams: URLSearchParams = new URLSearchParams(searchValue);
  const key: Key = PRODUCTS_URL + queryParams.toString();
  const fetcher = () => get<Product[]>(key);
  const { data, mutate } = useSWR(key, fetcher);

  const handleClearValidate = () => {
    (Object.keys(formValues) as (keyof typeof formValues)[]).map(
      (fieldName) => {
        formValues[fieldName].error = "";
      }
    );
  };

  useEffect (() => {
    setProducts(data);
  }, [data])

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
      await create(PRODUCT_CRUD, newProduct);
      mutate();
      toast.success(SUCCESS_MSG.MESSAGE_ADD_PRODUCT);
    } catch (error) {
      toast.error((error as any).message);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      await remove(`${PRODUCT_CRUD}/${id}`);
      mutate();
      toast.success(SUCCESS_MSG.MESSAGE_DELETE_PRODUCT);
    } catch (error) {
      toast.error((error as any).message);
    }
  };

  const toggleModalUpdate = useCallback(() => {
    setOpenModalCreate(!openModalCreate);
    handleClearValidate();
  }, [openModalCreate]);

  return (
    <>
      <div data-testid="product-gird-view" className="product__list">
        <button
          data-testid="open-modal"
          className="btn btn__add"
          onClick={toggleModalUpdate}
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
            formValues={formValues}
            setFormValues={setFormValues}
            createProduct={createProduct}
            hideModalCreate={toggleModalUpdate}
            clearValidate={handleClearValidate}
          />
        )}
      </div>
    </>
  );
};

export default ProductGridView;
