import Button from "../../../components/common/Button/Button";
import { ModalDeleteProps } from "../../../types/modal";
import React from "react";
import "./modalDelete.css";

const ModalDelete: React.FC<ModalDeleteProps> = ({ id, hideModalDelete, deleteProduct }) => {
  return (
    <div className="modal-delete" id="showModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <span className="modal-title">Are you sure to delete this product?</span>
          </div>
          <div className="modal-footer">
            <Button className="btn btn__no" onClick={() => hideModalDelete(false)} text="No" />
            <Button className="btn btn__yes" onClick={() => deleteProduct(id)} text="Yes" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
