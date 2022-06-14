import useSWR, { Key } from "swr";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { get } from "@/helpers/fetchApi";
import { PRODUCTS_URL } from "@/constants/url";
import Button from "@/components/common/Button/Button";
import { SearchContext } from "@/context/SearchContext";
import ProductListCard from "../ProductListCard/ProductListCard";
import { ProductContext } from "@/context/ProductContext";
import "./productListView.css";

const ProductListView: React.FC = () => {
  const { searchValue } = useContext(SearchContext);
  const { setProducts } = useContext(ProductContext);

  const queryParams: URLSearchParams = new URLSearchParams(searchValue);
  const key: Key = PRODUCTS_URL + queryParams.toString();
  const fetcher = () => get<Product[]>(key);
  const { data } = useSWR(key, fetcher);

  useEffect (() => {
    setProducts(data);
  }, [data])

  return (
    <>
      <div data-testid="view-product-list" className="viewProduct__list">
        {data?.map((product: Product) => (
          <div className="viewProduct__item" key={product.id}>
            <ProductListCard product={product} />
          </div>
        ))}
      </div>
      <Link className="viewProduct__link" to="/products">
        <Button className="btn btn__secondary" text="VIEW ALL PRODUCTS" />
      </Link>
    </>
  );
};

export default ProductListView;
