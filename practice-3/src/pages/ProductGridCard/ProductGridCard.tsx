import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Title from "@/components/common/Title/Title";
import Price from "@/components/Price/Price";
import { ProductItemProps } from "@/types/product";
import ModalDelete from "@/components/Modal/ModalDelete/ModalDelete";
import "./productGridCard.css";

const ProductGridCard: React.FC<ProductItemProps> = ({
  product,
  deleteProduct,
}) => {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const toggleModalUpdate = useCallback(() => {
    setOpenModalDelete(!openModalDelete);
  }, [openModalDelete]);

  return (
    <>
      <div data-testid="product-grid-card" className="product">
        <img className="product__image" src={product.images[0]} />
        <button
          data-testid="open-modal-delete"
          onClick={toggleModalUpdate}
          className="btn btn__delete"
        >
          <i className="fa fa-trash"></i>
        </button>
        <div className="product__content">
          <Link className="productViewPage__link" to={`/product/${product.id}`}>
            <Title className="productViewPage__title" text={product.name} />
          </Link>
          <Price className="productViewPage__price" value={product.price} />
        </div>
        {openModalDelete && (
          <ModalDelete
            id={product.id}
            deleteProduct={deleteProduct}
            hideModalDelete={toggleModalUpdate}
          />
        )}
      </div>
    </>
  );
};

export default ProductGridCard;
