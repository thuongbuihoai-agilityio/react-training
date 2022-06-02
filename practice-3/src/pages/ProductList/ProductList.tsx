import React, { useCallback, useState } from "react";
import ModalCreate from "@/components/Modal/ModalCreate/ModalCreate";
import Button from "@/components/common/Button/Button";
import useProducts from "@/hooks/useProducts";
import { Product } from "@/types/product";
import ProductItem from "../ProductItem/ProductItem";
import "./productList.css";

const ProductList: React.FC = () => {
  const { products, deleteProduct } = useProducts();
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const handleOpenModalUpdate = useCallback(() => {
    setOpenModalUpdate(true);
  }, []);

  return (
    <>
      <div data-testid="product-list-page" className="product__list">
        <Button onClick={handleOpenModalUpdate} className="btn btn__add" text="Add new product" />
        <div className="product__info">
          {products?.map((product: Product) =>
            <div className="product__item" key={product.id}>
              <ProductItem deleteProduct={deleteProduct} product={product} />
            </div>
          )}
        </div>
        {openModalUpdate && <ModalCreate hideModalUpdate={setOpenModalUpdate} />}
      </div>
    </>
  );
}

export default ProductList;
