import axios from "axios";
import { SUCCESS_MSG } from "../constants/message";
import { TASK_URL } from "../constants/url";
import { TodoType } from "../types/todo";

const createItem = async (newTodo: TodoType) => {
  try {
    const res = await axios({
      method: "POST",
      url: TASK_URL,
      data: newTodo
    });
    alert(SUCCESS_MSG.MESSAGE_ADD_TODO);
    return await res;
  }
  catch(error) {
    console.log(error);
  };
}

const updateItem = async (id: string, todoEdit: TodoType) => {
  try {
    await axios ({
      method: "PUT",
      url: (`${TASK_URL}/${id}`),
      data: {...todoEdit},
    });
    alert(SUCCESS_MSG.MESSAGE_UPDATE_TODO);
  } catch(error) {
      console.log(error);
  };
}

const deleteItem = async (id: string) => {
  try {
    await axios.delete(`${TASK_URL}/${id}`);
    alert(SUCCESS_MSG.MESSAGE_DELETE_TODO);
  } catch(error) {
    console.log(error);
  };
}

export {
  createItem,
  updateItem,
  deleteItem
}