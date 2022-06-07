import axios from "axios";

const get = async <T>(url: string) => {
  try {
    const res = await axios.get<T>(url);
    return res.data;
  } catch(error) {
      console.log(error);
  }
};

const create = async <T>(url: string, newData: T) => {
  try {
    const res = await axios.post(url, newData);
    return res;
  }
  catch(error) {
    console.log(error);
  };
}

const update = async <T>(id: string, dataEdit: T) => {
  try {
    const res = await axios.put(id, {...dataEdit});
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