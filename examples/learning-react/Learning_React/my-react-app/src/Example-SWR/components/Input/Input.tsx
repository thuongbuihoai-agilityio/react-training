import { ChangeEvent, memo, useState } from "react";

interface InputProps {
  addTodo: (title: string) => void;
}

const Input:React.FC<InputProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleAddTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <input
      placeholder="Add new todo"
      className="todo__input"
      onChange={onChange}
      onKeyPress={handleAddTodo}
      value={title}
    />
  );
};

export default memo(Input);
