// Libs
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// Helpers
import { renderRouterTest } from '../../../../helpers/testUtils';

// Components
import Modal from '../index';

describe('Modal component', () => {
  test('Should render Modal component by default', () => {
    const { getByTestId } = renderRouterTest(<Modal />);
    const modal = getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });

  test('Should render Modal component by click close button', async () => {
    const onClickCloseButton = jest.fn();
    const { getByTestId } = renderRouterTest(
      <Modal onToggleModal={onClickCloseButton} />
    );
    const modal = getByTestId('button');
    await userEvent.click(modal);
    expect(onClickCloseButton).toHaveBeenCalled();
  });

  test('Matches snapshot', () => {
    const { container } = renderRouterTest(<Modal />);
    expect(container).toMatchSnapshot();
  });
});
