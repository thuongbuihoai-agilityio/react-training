import axios from "axios";
import useSWR from "swr";
import { TASK_URL } from "../constants/url";
import { TodoType } from "../types/todo";
import { createItem, deleteItem, updateItem } from "../helpers/fetchApi";

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
    await createItem(newTodo);
  };

  const updateTodo = async (id: string, todoData: TodoType) => {
    const todoEdit: TodoType = {
      id: todoData.id,
      title: todoData.title,
    };
    updateItem(id, todoEdit);
  }

  const deleteTodo = async (id: string) => {
    deleteItem(id);
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