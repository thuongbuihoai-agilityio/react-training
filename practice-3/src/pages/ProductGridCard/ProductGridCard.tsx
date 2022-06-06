import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Title from "@/components/common/Title/Title";
import Price from "@/components/Price/Price";
import { ProductItemProps } from "@/types/product";
import Button from "@/components/common/Button/Button";
import ModalDelete from "@/components/Modal/ModalDelete/ModalDelete";
import "./productGridCard.css";

const ProductGridCard: React.FC<ProductItemProps> = ({ product, deleteProduct }) => {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const handleOpenModalDelete = useCallback(() => {
    setOpenModalDelete(true);
  }, []);

  return (
    <>
      <div className="product">
        <img
          className="product__image"
          src={product.images[0]}
        />
        <Button onClick={handleOpenModalDelete} className="btn btn__delete" text={<i className="fa fa-trash"></i>} />
        <div className="product__content">
          <Link className="productViewPage__link" to={`/product/${product.id}`}>
            <Title className="productViewPage__title" text={product.name} />
          </Link>
          <Price className="productViewPage__price" value={product.price} />
        </div>
        {openModalDelete && <ModalDelete deleteProduct={deleteProduct} hideModalDelete={setOpenModalDelete} id={product.id} />}
      </div>
    </>
  );
}

export default ProductGridCard;
