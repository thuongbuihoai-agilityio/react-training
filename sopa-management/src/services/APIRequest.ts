import axios, { AxiosResponse } from 'axios';

/**
 * @param { string } url
 * @returns
 */
const getData = async <T>(url: string): Promise<T> => {
  const response = await axios.get(url);

  return response.data;
};

/**
 * Post new data to server
 * @param { string } url
 * @param { Product } newData
 * @returns
 */
const postData = async <T>(url: string, newData: T):Promise<AxiosResponse<T>> => {
  const res = await axios.post(url, newData);

  return res.data;
};

/**
 * @description Send a changed data to server using method put to updating the data
 * @param id
 * @param dataEdit
 * @returns
 */
const putData = async <T>(id: string, dataEdit: T):Promise<AxiosResponse<T>> => {
  const res = await axios.put(id, {...dataEdit});
  return res;
};

const api = {
  getData,
  postData,
  putData
};

export { api };
