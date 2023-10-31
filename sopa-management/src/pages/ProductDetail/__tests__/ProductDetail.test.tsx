// Libs
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import ProductDetail from '@pages/ProductDetail';

// Helpers
import { renderWithRouterAndQuery } from '@helpers/testUtils';

// Mocks
import { MOCK_PRODUCT } from '@mocks/product';

// Mock useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
}));

// Mock useFetchProductDetail
jest.mock('@hooks/useQuery', () => ({
  useFetchProductDetail: () => ({
    data: MOCK_PRODUCT,
    isLoading: false,
  }),
}));

// Mock handleAddToCart
const mockHandleAddToCart = jest.fn();
jest.mock('@stores/cart', () => ({
  useCartStore: jest.fn((selector) => selector({
    addToCart: mockHandleAddToCart,
  })),
}));

describe('ProductDetail component', () => {
  test('should render ProductDetail component', () => {
    const { getByTestId } = renderWithRouterAndQuery(<ProductDetail />);
    expect(getByTestId('product-detail')).toBeInTheDocument();
  });

  test('renders product details when not loading', () => {
    const { getByTestId } = renderWithRouterAndQuery(<ProductDetail />);

    expect(getByTestId('detail')).toBeInTheDocument();
    expect(screen.getByText(MOCK_PRODUCT.name)).toBeInTheDocument();
    expect(screen.getByText(`Color: ${MOCK_PRODUCT.color}`)).toBeInTheDocument();
    expect(screen.getByText(`Size`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add to bag/i })).toBeInTheDocument();
  });

  test('should call handleAddToCart when "Add to bag" button is clicked', async () => {
    renderWithRouterAndQuery(<ProductDetail />);

    const addToBagButton = screen.getByRole('button', { name: /Add to bag/i });
    await userEvent.click(addToBagButton);

    expect(mockHandleAddToCart).toHaveBeenCalled();
  });

  test('matches snapshot', () => {
    const { container } = renderWithRouterAndQuery(<ProductDetail />);
    expect(container).toMatchSnapshot();
  });
});
