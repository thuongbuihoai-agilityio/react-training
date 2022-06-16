import useSWR, { Key } from "swr";
import React, { useCallback, useContext, useState } from "react";
import ModalCreate from "@/components/Modal/ModalCreate/ModalCreate";
import { Product } from "@/types/product";
import ProductGridCard from "../ProductGridCard/ProductGridCard";
import { SearchContext } from "@/context/SearchContext";
import { PRODUCTS_URL, PRODUCT_CRUD } from "@/constants/url";
import { create, getData, remove } from "@/helpers/fetchApi";
import { toast } from "react-toastify";
import { SUCCESS_MSG } from "@/constants/message";
import { FormProps } from "@/types/form";
import FORM_VALUES from "@/constants/form";
import "./productGridView.css";

const ProductGridView: React.FC = () => {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const { searchValue } = useContext(SearchContext);
  // create state to set form values
  const [formValues, setFormValues] = useState<FormProps>(FORM_VALUES);

  // URLSearchParams: convert searchValue to string => handle search
  const queryParams: URLSearchParams = new URLSearchParams(searchValue);
  const key: Key = PRODUCTS_URL + queryParams.toString();
  const { data, mutate } = useSWR(key, getData<Product[]>);

  // handle clear validate
  const handleClearValidate = () => {
    (Object.keys(formValues) as (keyof typeof formValues)[]).map(
      (fieldName) => {
        formValues[fieldName].error = "";
      }
    );
  };

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
      await create(PRODUCT_CRUD, newProduct);
      mutate();
      toast.success(SUCCESS_MSG.MESSAGE_ADD_PRODUCT);
    } catch (error) {
      toast.error((error as any).message);
    }
  };

  // delete product
  const deleteProduct = async (id: string) => {
    try {
      await remove(`${PRODUCT_CRUD}/${id}`);
      mutate();
      toast.success(SUCCESS_MSG.MESSAGE_DELETE_PRODUCT);
    } catch (error) {
      toast.error((error as any).message);
    }
  };

  // handle toggle modal create
  const toggleModalCreate = useCallback(() => {
    setOpenModalCreate(!openModalCreate);
    handleClearValidate();
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
            formValues={formValues}
            setFormValues={setFormValues}
            createProduct={createProduct}
            hideModalCreate={toggleModalCreate}
            clearValidate={handleClearValidate}
          />
        )}
      </div>
    </>
  );
};

export default ProductGridView;
