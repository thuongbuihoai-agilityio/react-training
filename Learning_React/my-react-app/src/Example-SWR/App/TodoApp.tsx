import { Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import TodoDetail from "../Todos/TodoDetail/TodoDetail";
import TodoListSWR from "../Todos/TodoList/TodoList";

const swrConfig = {
  revalidateOnFocus: false,
  shouldRetryOnError: true
};

const TodoAppSWR: React.FC = () => {
  return (
    <SWRConfig value={swrConfig}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todos" element={<TodoListSWR />}/>
        <Route path={`/todo/:id`} element={<TodoDetail />} />
      </Routes>
    </SWRConfig>
  )
}

export default TodoAppSWR;