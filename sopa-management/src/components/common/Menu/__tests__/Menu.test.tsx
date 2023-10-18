// Libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

// Components
import Menu from '../index';

// Constants
import { MENU_HEADER } from '../../../../constants/common';

describe('Menu component', () => {
  test('Should render Menu component', () => {
    const { getByTestId } = render(<Menu menuList={MENU_HEADER} />);
    const menu = getByTestId('menu');
    expect(menu).toBeInTheDocument();
  });

  test('Should render Menu component by default', () => {
    const { getByTestId } = render(<Menu menuList={MENU_HEADER} />);
    const menu = getByTestId('menu');
    expect(menu).toBeInTheDocument();
  });

  test('Should render Menu component by default', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Menu menuList={MENU_HEADER} mainItem='Products' />
      </Router>
    );
    const menu = getByTestId('menu');
    expect(menu).toBeInTheDocument();
  });

  test('Matches snapshot', () => {
    const { container } = render(<Menu menuList={MENU_HEADER} />);
    expect(container).toMatchSnapshot();
  });
});
