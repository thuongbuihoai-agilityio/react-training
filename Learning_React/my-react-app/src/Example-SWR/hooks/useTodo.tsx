import axios from "axios";
import useSWR from "swr";
import { TASK_URL } from "../constants/url";
import { TodoType } from "../types/todo";
import { SUCCESS_MSG } from "../constants/message";

export default function useTodo() {
  const fetcher = (url: string) => axios.get(url).then(res => res.data);
  const { data, error } = useSWR(TASK_URL, fetcher, { refreshInterval: 1000 });
  const todos: TodoType[] = data ? ([] as TodoType[]).concat(...data) : [];
  const renderId = new Date();

  const addTodo = async (title: string) => {
    const newTodo: TodoType = {
      id: renderId.valueOf().toString(),
      title,
    };
    try {
      await axios({
        method: "POST",
        url: TASK_URL,
        data: newTodo
      });
      alert(SUCCESS_MSG.MESSAGE_ADD_TODO);
    }
    catch(error) {
      alert(error);
    };
  };

  const updateTodo = async (id: string, todoData: TodoType) => {
    const todoEdit: TodoType = {
      id: todoData.id,
      title: todoData.title,
    };
    try {
      await axios ({
        method: "PUT",
        url: (`${TASK_URL}/${id}`),
        data: {...todoEdit},
      });
      alert(SUCCESS_MSG.MESSAGE_UPDATE_TODO);
    } catch(error) {
        alert(error);
    };
  }

  const deleteTodo = async (id: string) => {
    try {
      await axios.delete(`${TASK_URL}/${id}`);
      alert(SUCCESS_MSG.MESSAGE_DELETE_TODO);
    } catch(error) {
      alert(error);
    };
  };

  return {
    todos,
    error,
    isLoading: !data && !error,
    addTodo,
    updateTodo,
    deleteTodo
  }
}