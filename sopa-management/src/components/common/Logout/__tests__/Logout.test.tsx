// Libs
import '@testing-library/jest-dom';

// Components
import Logout from '@common/Logout';

// Helpers
import { renderRouterTest } from '../../../../helpers/testUtils';

describe('Logout component', () => {
  test('should render Logout component', () => {
    const { getByTestId } = renderRouterTest(<Logout />);
    expect(getByTestId('logout')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = renderRouterTest(<Logout />);
    expect(asFragment()).toMatchSnapshot();
  });
});
