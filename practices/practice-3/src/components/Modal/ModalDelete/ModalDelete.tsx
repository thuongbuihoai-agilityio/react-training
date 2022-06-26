import React from "react";
import { ModalDeleteProps } from "@common-types/modal";
import Button from "@components/common/Button/Button/Button";
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
            <Button text="No" className="btn btn__no" onClick={hideModalDelete} />
            <Button text="Yes" className="btn btn__yes" onClick={() => deleteProduct(id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
