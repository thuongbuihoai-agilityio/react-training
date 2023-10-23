// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import Counter from '..';

describe('Counter component', () => {
  const onIncrement= jest.fn();
  const onDecrement = jest.fn();
  test('should render Counter component', () => {
    const { getByTestId } = render(
      <Counter
        value={2}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    );
    expect(getByTestId('counter')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <Counter
        value={2}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
