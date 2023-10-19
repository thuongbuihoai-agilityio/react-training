// Libs
import '@testing-library/jest-dom';
import {
  render,
  waitFor,
  screen
} from '@testing-library/react';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { BrowserRouter } from 'react-router-dom';

// Components
import ProductList from '..';

// Mocks
import { MOCK_PRODUCTS } from '../../../__mocks__/product';
import mockAxios from '../../../__mocks__/axios';

const queryClient = new QueryClient();
mockAxios.get.mockResolvedValue({ data: MOCK_PRODUCTS });

describe('ProductList component', () => {
  test('should render ProductList component', () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <ProductList />
      </QueryClientProvider>
    );
    expect(getByTestId('product')).toBeInTheDocument();
  });

  test('renders loading state initially', async () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ProductList />
        </BrowserRouter>
      </QueryClientProvider>
    );
    expect(getByTestId('product')).toBeInTheDocument();
    await waitFor(() => screen.getByTestId('product-list'));
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(getByTestId('product-list')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ProductList />
        </BrowserRouter>
      </QueryClientProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
