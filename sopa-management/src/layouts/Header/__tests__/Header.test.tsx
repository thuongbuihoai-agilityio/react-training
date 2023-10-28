// Libs
import '@testing-library/jest-dom';

// Components
import Header from '@layouts/Header';

// Helpers
import { renderRouterTest } from '@helpers/testUtils';

describe('Header component', () => {
  test('should render Header component', () => {
    const { getByTestId } = renderRouterTest(<Header />);
    expect(getByTestId('header')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = renderRouterTest(<Header />);
    expect(container).toMatchSnapshot();
  });
});
