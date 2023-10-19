// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

// Constants
import { IMAGE } from '../../../../constants/image';

// Components
import Logo from '..';

describe('Logo component', () => {
  test('should render logo component', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Logo url={IMAGE.blackLogo} href='/' />
      </Router>
    );
    expect(getByTestId('logo')).toBeInTheDocument();
  });

  test('should render logo component default url', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Logo href='/' />
      </Router>
    );
    expect(getByTestId('logo')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <Logo url={IMAGE.whiteLogo} href='/' />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
