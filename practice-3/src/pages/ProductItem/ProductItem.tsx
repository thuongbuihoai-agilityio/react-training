import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import Price from "../../components/Price/Price";
import { ProductItemProps } from "../../types/product";
import "./productItem.css"
import Button from "../../components/Button/Button";
import ModalDelete from "../../components/Modal/ModalDelete/ModalDelete";

const ProductItem: React.FC<ProductItemProps> = ({ product, deleteProduct }) => {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const handleOpenModalDelete = useCallback(() => {
    setOpenModalDelete(true)
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
        <Link className="productViewPage__link" state={{ product }} to={`/product/${product.id}`}>
          <Title className="productViewPage__title" text={product.name} />
        </Link>
        <Price className="productViewPage__price" value={product.price} />
      </div>
    </div>
    {openModalDelete && <ModalDelete deleteProduct={deleteProduct} hideModalDelete={setOpenModalDelete} id={product.id} />}
    </>
  );
}

export default ProductItem;
