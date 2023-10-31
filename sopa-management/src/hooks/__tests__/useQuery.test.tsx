import {
  renderHook,
  waitFor
} from '@testing-library/react';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

// Mocks
import mockAxios from '@mocks/axios';
import { MOCK_PRODUCTS } from '@mocks/product';

// Hooks
import { useInfiniteProducts } from '../useQuery';

const queryClient = new QueryClient();
describe('Test useInfiniteProducts', () => {
  const wrapper = ({ children }: any) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  test('Should return data and isSuccess is true when call useInfiniteProducts success', async () => {
    mockAxios.get.mockResolvedValue({ data: MOCK_PRODUCTS });
    const { result } = renderHook(() => useInfiniteProducts(), { wrapper });

    await waitFor(() => {
      expect(result.current.isSuccess).toEqual(true);
      expect(result.current.data[0]).toEqual(MOCK_PRODUCTS);
    });
  });
});
