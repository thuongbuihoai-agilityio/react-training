import axios from "axios";

const getData = async <T>(url: string) => {
  const res = await axios.get<T>(url);
  return res.data;
};

const create = async <T>(url: string, newData: T) => {
  const res = await axios.post(url, newData);
  return res;
}

const update = async <T>(id: string, dataEdit: T) => {
  const res = await axios.put(id, {...dataEdit});
  return res;
}

const remove = async (id: string) => {
  const res = await axios.delete(id);
  return res;
}

export {
  getData,
  create,
  update,
  remove
}