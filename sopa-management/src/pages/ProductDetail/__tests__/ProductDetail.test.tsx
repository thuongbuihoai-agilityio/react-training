// Libs
import '@testing-library/jest-dom';

// Components
import ProductDetail from '..';

// Helpers
import { renderWithRouterAndQuery } from '../../../helpers/testUtils';

describe('ProductDetail component', () => {
  test('should render ProductDetail component', () => {
    const { getByTestId } = renderWithRouterAndQuery(<ProductDetail />);
    expect(getByTestId('detail')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = renderWithRouterAndQuery(<ProductDetail />);
    expect(container).toMatchSnapshot();
  });
});
