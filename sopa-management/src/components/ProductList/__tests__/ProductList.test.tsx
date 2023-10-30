// Libs
import '@testing-library/jest-dom';
import { waitFor, screen } from '@testing-library/react';

// Components
import ProductList from '..';

// Mocks
import { MOCK_PRODUCTS } from '../../../__mocks__/product';
import mockAxios from '../../../__mocks__/axios';

// Helpers
import { renderWithRouterAndQuery } from '../../../helpers/testUtils';

mockAxios.get.mockResolvedValue({ data: MOCK_PRODUCTS });

jest.mock('../../../hooks/useQuery', () => ({
  useInfiniteProducts: jest.fn(() => ({
    data: { pages: [] },
    fetchNextPage: jest.fn(),
    hasNextPage: true,
    isLoading: false,
    isFetchingNextPage: false
  }))
}));

describe('ProductList component', () => {
  test('should render ProductList component', () => {
    const { getByTestId } = renderWithRouterAndQuery(<ProductList />);
    expect(getByTestId('product')).toBeInTheDocument();
  });

  test('should render "Show More" button when hasNextPage is true', () => {
    renderWithRouterAndQuery(<ProductList />);

    const showMoreButton = screen.getByText('Show More');
    expect(showMoreButton).toBeInTheDocument();
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
