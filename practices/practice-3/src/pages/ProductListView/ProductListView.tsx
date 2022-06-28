import useSWR from "swr";
import React, { useContext, useEffect } from "react";
import Button from "@components/common/Button/Button/Button";
import ProductListCard from "../ProductListCard/ProductListCard";
import ScrollButton from "@components/common/Button/ScrollButton/ScrollButton";
import { Link } from "react-router-dom";
import { Product } from "@common-types/product";
import { DataContext } from "@context/DataContext";
import { Action } from "@common-types/data";
import { PRODUCTS_URL } from "@constants/url";
import { getData } from "@helpers/fetchApi";
import "./productListView.css";

const ProductListView: React.FC = () => {
  // URLSearchParams: convert searchValue to string => handle search
  const { products, searchValue, dispatch } = useContext(DataContext);
  const queryParams: URLSearchParams = new URLSearchParams(searchValue);
  const { data } = useSWR(PRODUCTS_URL + "?" + queryParams.toString(), getData<Product[]>);
  useEffect(() => {
    if(data) {
      dispatch({
        action: Action.GetProductSuccess,
        payload: data
      });
    }
  }, [data]);

  return (
    <>
      <div data-testid="view-product-list" className="viewProduct__list">
        {products?.map((product: Product) => (
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
};

export default ProductListView;
