import axios from "axios";
import { Product } from "@/types/product";

const get = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch(error) {
    console.log(error)
  }
};

const create = async (url: string, newProduct: Product) => {
  try {
    const res = await axios.post(url, newProduct);
    return res;
  }
  catch(error) {
    console.log(error);
  };
}

const update = async (id: string, productEdit: Product) => {
  try {
    const res = await axios.put(id, {...productEdit});
    return res;
  } catch(error) {
      console.log(error);
  };
}

const remove = async (id: string) => {
  try {
    const res = await axios.delete(id);
    return res;
  } catch(error) {
    console.log(error);
  };
}

export {
  get,
  create,
  update,
  remove
}