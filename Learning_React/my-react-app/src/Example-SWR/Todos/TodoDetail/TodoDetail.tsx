import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { TASK_URL } from "../../constants/url";
import { TodoProps } from "../../types/todo";
import ModalUpdate from "../Modal/ModalUpdate";

const TodoDetail: React.FC = () => {
  const location = useLocation();
  const { id } = useParams();
  const { todo } = location.state as TodoProps;

  const [todoDetailNew, setTodoDetailNew] = useState(todo);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [isReload, setIsReLoad] = useState(false);

  async function fetchMyAPI() {
    const result = await axios
    .get(`${TASK_URL}/${id}`)
    .then((res) => {
      setTodoDetailNew(res.data);
    })
    .catch(function (error) {
      alert(error);
    });
  }

  useEffect(() => {
    if(todo.id) {
      fetchMyAPI();
    }
  }, [isReload]);

  const handleOpenModalUpdate = useCallback(() => {
    setOpenModalUpdate(true)
  }, []);

  return (
    <div data-testid="todoDetail-page" className="todo__item">
      <ul className="detail__list">
        <li className="detail__item">
          {todoDetailNew.title}
        </li>
        <button onClick={handleOpenModalUpdate} className="btn btn__update">Update</button>
      </ul>
      {openModalUpdate && <ModalUpdate isReload={isReload} setIsReLoad={setIsReLoad} todo={todoDetailNew} hideModalUpdate={setOpenModalUpdate} />}
    </div>
  )
}

export default TodoDetail;
