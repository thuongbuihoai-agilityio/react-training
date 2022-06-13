import React from "react";
import { ModalDeleteProps } from "@/types/modal";
import "../modal.css";

const ModalDelete: React.FC<ModalDeleteProps> = ({ id, hideModalDelete, deleteProduct }) => {
  return (
    <div data-testid="modal-delete" className="modal-delete" id="showModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <span className="modal-title">Are you sure to delete this product?</span>
          </div>
          <div className="modal-footer">
            <button data-testid="btn-no" className="btn btn__no" onClick={hideModalDelete}>No</button>
            <button data-testid="btn-yes" className="btn btn__yes" onClick={() => deleteProduct(id)}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
