// Libs
import '@testing-library/jest-dom';
import {
  waitFor,
  screen
} from '@testing-library/react';

// Components
import ProductList from '@components/ProductList';

// Mocks
import { MOCK_PRODUCTS } from '@mocks/product';
import mockAxios from '@mocks/axios';

// Helpers
import { renderWithRouterAndQuery } from '@helpers/testUtils';

mockAxios.get.mockResolvedValue({ data: MOCK_PRODUCTS });

describe('ProductList component', () => {
  test('should render ProductList component', () => {
    const { getByTestId } = renderWithRouterAndQuery(<ProductList />);
    expect(getByTestId('product')).toBeInTheDocument();
  });

  test('renders loading state initially', async () => {
    const { getByTestId } = renderWithRouterAndQuery(<ProductList />);

    expect(getByTestId('product')).toBeInTheDocument();
    await waitFor(() => screen.getByTestId('product-list'));
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(getByTestId('product-list')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = renderWithRouterAndQuery(<ProductList />);
    expect(container).toMatchSnapshot();
  });
});
