import React, { useState } from "react";
import Button from "../../components/Button/Button";
import useTodo from "../../hooks/useTodo";
import { ModalUpdateProps, TodoType } from "../../types/todo";

const ModalUpdate: React.FC<ModalUpdateProps> = ({todo, isReload, setIsReLoad, hideModalUpdate}) => {
  const {updateTodo}  = useTodo();
  const [todoEdit, setTodoEdit] = useState(todo);

  const update = (id: string, data: TodoType) => {
    updateTodo(id, data);
    setIsReLoad(!isReload);
    hideModalUpdate(false);
  }

  const handleChange = (event: { target: { value: {}; name: string; } }) => {
    const value = event.target.value;
    const key = event.target.name;
    setTodoEdit({...todoEdit, [key]: value});
  }

  return (
    <div className="modals" id="bookDeleteModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="productModalLabel">Edit Task</h4>
          </div>
          <div className="modal-body">
            <div className="form-control">
              <label htmlFor="">Title:</label>
              <input data-testid="update-input" className="form__input" type="text" onChange={handleChange} value={todoEdit.title} name="title" />
            </div>
          </div>
          <div className="modal-footer">
            <Button value="Submit" className="btn btn__submit" onClick={() => update(todoEdit.id, todoEdit)} />
            <Button value="Cancel" className="btn btn__cancel" onClick={() => hideModalUpdate(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalUpdate;
