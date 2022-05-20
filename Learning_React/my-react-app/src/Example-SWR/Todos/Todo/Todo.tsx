import { TodoProps } from "../../types/todo"

const Todo: React.FC<TodoProps> = ({todo}) => {
  return (
    <div className="todo__item">
      <ul>
        <li>
          {todo.title}
        </li>
      </ul>
    </div>
  )
}
export default Todo;