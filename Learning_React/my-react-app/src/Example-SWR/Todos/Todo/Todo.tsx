import { Link } from "react-router-dom";
import { TodoProps } from "../../types/todo";

const Todo: React.FC<TodoProps> = ({ todo, deleteTodo }) => {
  return (
    <div className="todo__item">
      <ul className="task__list">
        <li className="task__item">
          <Link className="task__link" to={`/todo/${todo.id}`} state={{ todo }}>{todo.title}</Link>
          <button onClick={() => deleteTodo(todo.id)} className="btn btn__del">
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
