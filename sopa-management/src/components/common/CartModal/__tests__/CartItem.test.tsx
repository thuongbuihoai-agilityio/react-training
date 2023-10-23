// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import CartItem from '../CartItem';

// Mocks
import { MOCK_PRODUCT } from '../../../../__mocks__/product';

describe('CartItem component', () => {
  const onIncrement = jest.fn();
  const onDecrement = jest.fn();
  test('should render CartItem component', () => {
    const { getByTestId } = render(
      <CartItem
        cartItem={MOCK_PRODUCT}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    );
    expect(getByTestId('cart-item')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <CartItem
        cartItem={MOCK_PRODUCT}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
