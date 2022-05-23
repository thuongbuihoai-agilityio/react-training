import Input from "../../components/Input/Input";
import useTodo from "../../hooks/useTodo";
import { TodoType } from "../../types/todo";
import Todo from "../Todo/Todo";

const TodoListSWR: React.FC = () => {
  const {todos, addTodo, deleteTodo}  = useTodo();

  return (
    <>
      <Input addTodo={addTodo} />
      <div className="product__list">
        {todos.map((todo: TodoType, index: number) =>
          <div className="product__item" key={index}>
            <Todo todo={todo} deleteTodo={deleteTodo} />
          </div>
        )}
      </div>
    </>
  );

}

export default TodoListSWR;