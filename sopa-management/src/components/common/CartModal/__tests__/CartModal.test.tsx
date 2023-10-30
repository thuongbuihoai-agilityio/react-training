// Libs
import '@testing-library/jest-dom';

// Helpers
import { renderRouterTest } from '../../../../helpers/testUtils';

// Components
import CartModal from '../index';
import { MOCK_PRODUCTS } from '../../../../__mocks__/product';

jest.mock('../../../../stores/cart', () => ({
  useCartStore: jest.fn(() => ({
    carts: MOCK_PRODUCTS,
  })),
}));

describe('Modal component', () => {
  test('Should render Modal component by default', () => {
    const { getByTestId } = renderRouterTest(<CartModal />);
    const cartModal = getByTestId('cart-modal');
    expect(cartModal).toBeInTheDocument();
  });

  it('should render CartModal with cart items when carts is true', () => {
    const { getByTestId, getByText } = renderRouterTest(<CartModal />);
    const cartModal = getByTestId('cart-modal');
    expect(cartModal).toBeInTheDocument();
    expect(getByText('Cart')).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    const { container } = renderRouterTest(<CartModal />);
    expect(container).toMatchSnapshot();
  });
});
