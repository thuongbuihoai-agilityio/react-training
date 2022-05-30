import useSWR from "swr";
import { useContext } from "react";
import { PRODUCTS_URL, PRODUCT_CRUD } from "@/constants/url";
import { create, get, remove, update } from "@/helpers/fetchApi";
import { FilterContext } from "@/context/FilterContext";
import { Product } from "@/types/product";

export default function useProducts() {
  const renderId = new Date();
  const {filterInput} = useContext(FilterContext);

  const filter = {
    ...filterInput,
  };

  const queryParams: URLSearchParams = new URLSearchParams(filter);

  const { data, error } = useSWR(PRODUCTS_URL + queryParams.toString(), get, { refreshInterval: 1000 });

  const createProduct = async (productData: Product) => {
    const newProduct: Product = {
      id: renderId.valueOf().toString(),
      categoryId: productData.categoryId,
      name: productData.name,
      price: +productData.price,
      quantity: +productData.quantity,
      description: productData.description,
      images: productData.images
    };
    create(PRODUCT_CRUD, newProduct);
  }

  const updateProduct = async (id: string, productData: Product) => {
    const productEdit: Product = {
      id: productData.id,
      categoryId: productData.categoryId,
      name: productData.name,
      price: +productData.price,
      quantity: +productData.quantity,
      description: productData.description,
      images: productData.images
    };
    update(`${PRODUCT_CRUD}/${id}`, productEdit);
  }

  const deleteProduct = async (id: string) => {
    remove(`${PRODUCT_CRUD}/${id}`);
  };

  return {
    products: data,
    error,
    createProduct,
    updateProduct,
    deleteProduct
  }
}