// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import Counter from '..';

describe('Counter component', () => {
  test('should render Counter component', () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId('counter')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
