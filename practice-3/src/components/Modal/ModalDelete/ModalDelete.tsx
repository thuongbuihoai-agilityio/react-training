import Button from "../../../components/Button/Button";
import { ModalDeleteProps } from "../../../types/modal";
import React from "react";
// import "./modalDelete.css";

const ModalDelete: React.FC<ModalDeleteProps> = ({ id, hideModalDelete, deleteProduct }) => {
  return (
    <div className="modal" id="showModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <span>Are you sure to delete this product?</span>
          </div>
          <div className="modal-footer">
            <Button onClick={() => hideModalDelete(false)} text="No" />
            <Button onClick={() => deleteProduct(id)} text="Yes" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
