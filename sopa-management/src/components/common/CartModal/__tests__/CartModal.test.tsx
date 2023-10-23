// Libs
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// Helpers
import { renderRouterTest } from '../../../../helpers/testUtils';

// Components
import CartModal from '../index';

describe('Modal component', () => {
  test('Should render Modal component by default', () => {
    const { getByTestId } = renderRouterTest(<CartModal />);
    const cartModal = getByTestId('cart-modal');
    expect(cartModal).toBeInTheDocument();
  });

  test('Should render Modal component by click close button', async () => {
    const onClickCloseButton = jest.fn();
    const { getByTestId } = renderRouterTest(
      <CartModal onToggleModal={onClickCloseButton} />
    );
    const cartModal = getByTestId('button');
    await userEvent.click(cartModal);
    expect(onClickCloseButton).toHaveBeenCalled();
  });

  test('Matches snapshot', () => {
    const { container } = renderRouterTest(<CartModal />);
    expect(container).toMatchSnapshot();
  });
});
