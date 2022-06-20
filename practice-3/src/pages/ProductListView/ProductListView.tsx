import useSWR, { Key } from "swr";
import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { getData } from "@/helpers/fetchApi";
import { PRODUCTS_URL } from "@/constants/url";
import { SearchContext } from "@/context/SearchContext";
import Button from "@/components/common/Button/Button/Button";
import ProductListCard from "../ProductListCard/ProductListCard";
import ScrollButton from "@/components/common/Button/ScrollButton/ScrollButton";
import "./productListView.css";

const ProductListView: React.FC = memo(() => {
  const { searchValue } = useContext(SearchContext);
  // URLSearchParams: convert searchValue to string => handle search
  const queryParams: URLSearchParams = new URLSearchParams(searchValue);
  const key: Key = PRODUCTS_URL + queryParams.toString();
  const { data } = useSWR(key, getData<Product[]>);

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
      <ScrollButton className="btn__backToTop" text={<i className="fa fa-arrow-alt-circle-up"></i>} />
    </>
  );
});

export default ProductListView;
