import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { TodoProps } from "../../types/todo";
import ModalDelete from "../Modal/ModalDelete";

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const handleOpenModalDelete = useCallback(() => {
    setOpenModalDelete(true)
  }, []);

  return (
    <div data-testid="todo-item" className="todo__item">
      <ul className="task__list">
        <li className="task__item">
          <Link className="task__link" to={`/todo/${todo.id}`} state={{ todo }}>{todo.title}</Link>
          <Button value="Delete" onClick={handleOpenModalDelete} data-testid="delete-btn" />
        </li>
      </ul>
      {openModalDelete && <ModalDelete hideModalDelete={setOpenModalDelete} id={todo.id} />}
    </div>
  );
};

export default Todo;
