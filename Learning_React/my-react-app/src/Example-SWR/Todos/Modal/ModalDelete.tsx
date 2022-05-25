import React from "react";
import useTodo from "../../hooks/useTodo";
import { ModalDeleteProps } from "../../types/modal";

const ModalDelete: React.FC<ModalDeleteProps> = ({ id, hideModalDelete }) => {
  const {deleteTodo} = useTodo();

  const deleteTodoItem = (id: string) => {
    deleteTodo(id);
    hideModalDelete(false);
  }
  return (
    <div className="modal" id="showModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <span>Are you sure to delete this product?</span>
          </div>
          <div className="modal-footer">
            <button className="btn btn__no" onClick={() => hideModalDelete(false)}>No</button>
            <button className="btn btn__yes" onClick={() => deleteTodoItem(id)}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
