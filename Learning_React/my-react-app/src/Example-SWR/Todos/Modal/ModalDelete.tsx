import React from "react";
import Button from "../../components/Button/Button";
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
            <span>Are you sure to delete todo?</span>
          </div>
          <div className="modal-footer">
            <Button className="btn btn__no" onClick={() => hideModalDelete(false)} value="No" />
            <Button className="btn btn__yes" onClick={() => deleteTodoItem(id)} value="Yes" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
