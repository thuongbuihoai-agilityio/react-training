import axios from 'axios';

/**
 * @param { string } url 
 * @param { number } pageParam
 * @returns
 */
const getData = async <T>(url: string): Promise<T> => {
  const response = await axios.get(url);

  return response.data;
};

const api = { getData };

export { api };
