// Libs
import '@testing-library/jest-dom';

// Components
import Login from '..';

// Helpers
import { renderWithRouterAndQuery } from '../../../helpers/testUtils';

describe('Login component', () => {
  test('should render Login component', () => {
    const { getByTestId } = renderWithRouterAndQuery(<Login />);
    expect(getByTestId('login')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = renderWithRouterAndQuery(<Login />);
    expect(container).toMatchSnapshot();
  });
});
