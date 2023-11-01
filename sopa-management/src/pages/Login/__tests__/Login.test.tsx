// Libs
import '@testing-library/jest-dom';

// Components
import Login from '..';

// Helpers
import { renderWithRouterAndQuery } from '../../../helpers/testUtils';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { checkLogin } from '@helpers/common';
import { MOCK_ACCOUNTS } from '@mocks/account';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('@helpers/common', () => ({
  ...jest.requireActual('@helpers/common'),
  checkLogin: jest.fn(),
}));

describe('Login component', () => {
  test('should render Login component', () => {
    const { getByTestId } = renderWithRouterAndQuery(<Login />);
    expect(getByTestId('login')).toBeInTheDocument();
  });

  test('should not display error when value is valid', async () => {
    const mockNavigate = jest.fn();
    (checkLogin as jest.Mock).mockReturnValue({
      data: MOCK_ACCOUNTS,
      email: 'example@gmail.com',
      password: '123456'
    });

    jest
      .spyOn(require('react-router-dom'), 'useNavigate')
      .mockReturnValue(mockNavigate);

    renderWithRouterAndQuery(<Login />);

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'example@gmail.com'
      }
    });

    fireEvent.input(screen.getByRole('textbox', { name: /password/i }), {
      target: {
        value: '123456'
      }
    });

    fireEvent.submit(screen.getByRole('button'));
    expect(screen.getByRole('textbox', { name: /email/i })).toHaveValue(
      'example@gmail.com'
    );
    expect(screen.getByRole('textbox', { name: /password/i })).toHaveValue(
      '123456'
    );
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/'));
  });

  test('should display error when value is invalid', async () => {
    const mockNavigate = jest.fn();
    (checkLogin as jest.Mock).mockReturnValue(false);

    jest
      .spyOn(require('react-router-dom'), 'useNavigate')
      .mockReturnValue(mockNavigate);

    renderWithRouterAndQuery(<Login />);

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'examples@gmail.com'
      }
    });

    fireEvent.input(screen.getByRole('textbox', { name: /password/i }), {
      target: {
        value: '1234567'
      }
    });

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => expect(mockNavigate).not.toHaveBeenCalledWith('/'));
  });

  test('matches snapshot', () => {
    const { container } = renderWithRouterAndQuery(<Login />);
    expect(container).toMatchSnapshot();
  });
});
