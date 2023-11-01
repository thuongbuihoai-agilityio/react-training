import axios from 'axios';
import { LIMIT_PRODUCTS } from '@constants/common';

/**
 * @param { string } url 
 * @param { number } pageParam
 * @returns
 */
const getData = async <T>(url: string, pageParam: number = 1): Promise<T> => {
  const offset = pageParam;
  const limit = LIMIT_PRODUCTS;
  const response = await axios.get(`${url}?limit=${limit}&page=${offset}`);

  return response.data;
};

const api = { getData };

export { api };
