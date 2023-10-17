import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Logout from '..';

describe('Logout component', () => {
  test('should render Logout component', () => {
    const { getByTestId } = render(<Logout />);
    expect(getByTestId('logout')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Logout />);
    expect(asFragment()).toMatchSnapshot();
  });
});
