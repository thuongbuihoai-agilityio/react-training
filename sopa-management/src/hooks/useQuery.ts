import { useInfiniteQuery, useQuery } from 'react-query';
import { AxiosError } from 'axios';


// Constants
import { QUERY_KEYS } from '@constants/keyQuery';
import { ACCOUNT_URL, PRODUCT_URL } from '@constants/url';
import {
  INITIAL_PRODUCT,
  LIMIT_PRODUCTS
} from '@constants/common';

// Interfaces
import { Product } from '@interfaces/product';

// Services
import { getData } from '@services/APIRequest';

// Stores
import { useProductStore } from '@stores/product';

// Helpers
import { flattenArray } from '@helpers/common';
import { Account } from '@interfaces/account';
import { useAccountStore } from '@stores/login';

/**
 * @description Fetch product by id
 * @param { string } id
 * @returns
 */
export const useFetchProductDetail = (id?: string) => {
  const { data, ...rest } = useQuery<Product, AxiosError>({
    queryKey: [QUERY_KEYS.PRODUCTS + id],
    queryFn: async () => await getData(`${PRODUCT_URL}/${id}`),
  });

  return {
    data: data || INITIAL_PRODUCT,
    ...rest
  };
};

/**
 * @description custom hook to get product with show more
 */
export const useInfiniteProducts = () => {
  const { setProducts } = useProductStore();

  const { data, ...rest } =  useInfiniteQuery<Product[], AxiosError>({
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: ({ pageParam = 1 }) => getData(PRODUCT_URL, pageParam),
    getNextPageParam: (lastPage, pages) => {
      const nextPage = pages.length + 1;
      return lastPage?.length > 0 && lastPage?.length === LIMIT_PRODUCTS
        ? nextPage
        : undefined;
    },
    onSuccess: ({ pages }) => {
      const result = flattenArray(pages);
      setProducts(result);
    }
  });

  return {
    data: data?.pages || [],
    ...rest
  }
};

/**
 * @description Fetch user
 * @returns
 */
export const useFetchUser = () => {
  const { setAccounts } = useAccountStore();

  return useQuery<Account[], AxiosError>({
    queryKey: [QUERY_KEYS.ACCOUNTS],
    queryFn: () => getData(ACCOUNT_URL),
    onSuccess: (data) => setAccounts(data),
  });
};
