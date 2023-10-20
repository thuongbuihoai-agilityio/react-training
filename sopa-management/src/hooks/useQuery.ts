import { useInfiniteQuery } from 'react-query';

// Mocks axios
import { AxiosError } from 'axios';

// Constants
import { QUERY_KEYS } from '../constants/keyQuery';
import { PRODUCT_URL } from '../constants/url';
import { LIMIT_PRODUCTS } from '../constants/common';

// Interfaces
import { Product } from '../interfaces/product';

// Services
import { getData } from '../services/APIRequest';

// Stores
import { useProductStore } from '../stores/product';

// Helpers
import { flattenArray } from '../helpers/common';

/**
 * @description custom hook to get product with show more
 */
export const useInfiniteProducts = () => {
  const { setProducts } = useProductStore();

  return useInfiniteQuery<Product[], AxiosError>({
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
    },
  });
};
