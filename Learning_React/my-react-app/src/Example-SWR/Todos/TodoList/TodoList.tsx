import useTodo from "../../hooks/useTodo";
import Todo from "../Todo/Todo";

const TodoList: React.FC = () => {
  const { todos } = useTodo();
  return (
      <>
      <input className="todo__input" type="text" />
      <button className="btn btn__add">Add todo</button>
      <div className="product__list">
      {todos.map((todo: any, index: number) => <div className="product__item" key={index}>
        <Todo todo={todo} />
      </div>
      )}
    </div></>
  );

}

export default TodoList;