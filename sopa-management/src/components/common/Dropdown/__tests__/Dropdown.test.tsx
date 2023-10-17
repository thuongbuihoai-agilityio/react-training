import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Dropdown from '..';
import { SIZE } from '../../../../constants/common';

describe('Dropdown component', () => {
  test('should render Dropdown component', () => {
    const { getByTestId } = render(<Dropdown data={SIZE} />);
    expect(getByTestId('dropdown')).toBeInTheDocument();
  });

  test('should render Dropdown component', () => {
    const { getByTestId } = render(<Dropdown />);
    expect(getByTestId('dropdown')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Dropdown data={SIZE} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
