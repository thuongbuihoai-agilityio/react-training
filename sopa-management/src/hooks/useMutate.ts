import { useMutation, useQueryClient } from 'react-query';

// Constants
import { QUERY_KEYS } from '@constants/keyQuery';
import { CART_URL } from '@constants/url';

// Services
import { api } from '@services/APIRequest';
import { Product } from '@interfaces/product';

/**
 * @description Custom hook post product
 */
export const useMutationPostProductToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (product: Product) => api.postData(CART_URL, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CARTS] });
    }
  });
};

/**
 * @description Custom hook edit product
 */
export const useMutationEditProductInCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (product: Product) =>
      api.putData(`${CART_URL}/${product.id}`, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CARTS] });
    }
  });
};
