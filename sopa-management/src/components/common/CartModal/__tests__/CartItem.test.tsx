// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import CartItem from '../CartItem';

// Mocks
import { MOCK_PRODUCT } from '../../../../__mocks__/product';

describe('CartItem component', () => {
  const props = {
    cartItem: MOCK_PRODUCT,
    onIncrement: jest.fn(),
    onDecrement: jest.fn()
  };
  test('should render CartItem component', () => {
    const { getByTestId } = render(<CartItem {...props} />);
    expect(getByTestId('cart-item')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<CartItem {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
