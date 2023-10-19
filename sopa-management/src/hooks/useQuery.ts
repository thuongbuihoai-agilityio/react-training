import { useInfiniteQuery } from 'react-query';
import { AxiosError } from 'axios';
import { QUERY_KEYS } from '../constants/keyQuery';
import { Product } from '../interfaces/product';
import { getData } from '../services/APIRequest';
import { PRODUCT_URL } from '../constants/url';
import { LIMIT_PRODUCTS } from '../constants/common';

/**
 * @description custom hook to get product with show more
 */
export const useProducts = () =>
  useInfiniteQuery<Product[], AxiosError>({
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: ({ pageParam = 1 }) => getData(PRODUCT_URL, pageParam),
    getNextPageParam: (lastPage, pages) => {
      const nextPage = pages.length + 1;
      return lastPage?.length > 0 && lastPage?.length === LIMIT_PRODUCTS
        ? nextPage
        : undefined;
    }
  });
