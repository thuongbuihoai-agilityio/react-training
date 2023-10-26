import {
  fireEvent,
  render,
  screen
} from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import Input from '../index';

describe('Input component', () => {
  test('Should render Input component', () => {
    const { getByTestId } = render(
      <Input type='text' placeholder='Enter email...' />
    );
    const inputValue = getByTestId('input');
    expect(inputValue).toBeInTheDocument();
  });

  test('Should render Input component by default', () => {
    const { getByTestId } = render(<Input />);
    const inputValue = getByTestId('input');
    expect(inputValue).toBeInTheDocument();
  });

  test('Should render Input component with label', () => {
    const { getByTestId } = render(<Input label='Products' />);
    const inputValue = getByTestId('input-value');
    expect(inputValue).toBeInTheDocument();
  });

  test('Check value input', async () => {
    render(<Input type='text' placeholder='Enter email...' />);
    const inputElement = screen.getByPlaceholderText(
      /Enter email.../i
    ) as HTMLInputElement;
    fireEvent.change(inputElement, {
      target: { value: 'ht@gmail.com' }
    });
    expect(inputElement.value).toBe('ht@gmail.com');
  });

  test('Matches snapshot', () => {
    const { container } = render(
      <Input type='text' placeholder='Your email...' />
    );
    expect(container).toMatchSnapshot();
  });
});
