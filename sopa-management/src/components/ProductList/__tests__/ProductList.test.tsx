// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ProductList from '..';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MOCK_PRODUCTS } from '../../../__mocks__/product';
import { useProducts } from '../../../hooks/useQuery';

// Components
const queryClient = new QueryClient();
jest.mock('../../../hooks/useQuery');

const handleFetchNextPage = jest.fn();

(useProducts as jest.Mock).mockReturnValue({
  data: MOCK_PRODUCTS,
  isLoading: false,
  isValidating: false,
  error: '',
  fetchNextPage: handleFetchNextPage
});

describe('ProductList component', () => {
  test('should render ProductList component', () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <ProductList />
      </QueryClientProvider>
    );
    expect(getByTestId('product-list')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
        <ProductList />
      </QueryClientProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
