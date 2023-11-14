// Libs
import '@testing-library/jest-dom';

// Helpers
import { renderWithRouterAndQuery } from '@helpers/testUtils';

// Components
import CartModal from '@components/CartModal';
import { MOCK_PRODUCTS } from '@mocks/product';

jest.mock('@stores/cart', () => ({
  useCartStore: jest.fn(() => ({
    carts: MOCK_PRODUCTS,
  })),
}));

describe('Modal component', () => {
  test('Should render Modal component by default', () => {
    const { getByTestId } = renderWithRouterAndQuery(<CartModal />);
    const cartModal = getByTestId('cart-modal');
    expect(cartModal).toBeInTheDocument();
  });

  test('should render CartModal with cart items when carts is true', () => {
    const { getByTestId, getByText } = renderWithRouterAndQuery(<CartModal />);
    const cartModal = getByTestId('cart-modal');
    expect(cartModal).toBeInTheDocument();
    expect(getByText('Cart')).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    const { container } = renderWithRouterAndQuery(<CartModal />);
    expect(container).toMatchSnapshot();
  });
});
