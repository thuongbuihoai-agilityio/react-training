import axios from "axios";
// import { SUCCESS_MSG } from "../constants/message";
// import { TodoType } from "../types/todo";

const get = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch(error) {
    console.log(error)
  }
};

// const createItem = async (url: string, newTodo: TodoType) => {
//   try {
//     const res = await axios.post(url, newTodo);
//     // alert(SUCCESS_MSG.MESSAGE_ADD_TODO);
//     return res;
//   }
//   catch(error) {
//     console.log(error);
//   };
// }

// const updateItem = async (id: string, todoEdit: TodoType) => {
//   try {
//     const res = await axios.put(id, {...todoEdit});
//     // alert(SUCCESS_MSG.MESSAGE_UPDATE_TODO);
//     return res;
//   } catch(error) {
//       console.log(error);
//   };
// }

// const deleteItem = async (id: string) => {
//   try {
//     const res = await axios.delete(id);
//     // alert(SUCCESS_MSG.MESSAGE_DELETE_TODO);
//     return res;
//   } catch(error) {
//     console.log(error);
//   };
// }

export {
  get,
  // createItem,
  // updateItem,
  // deleteItem
}