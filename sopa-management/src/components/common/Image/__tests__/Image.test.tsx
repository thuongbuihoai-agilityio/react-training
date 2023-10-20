// Libs
import '@testing-library/jest-dom';

// Constants
import { IMAGE } from '../../../../constants/image';

// Helpers
import { renderRouterTest } from '../../../../helpers/testUtils';

// Components
import Image from '..';

describe('Image component', () => {
  test('should render Image component', () => {
    const { getByTestId } = renderRouterTest(
      <Image url={IMAGE.blackLogo} href='/' />
    );
    expect(getByTestId('image-link')).toBeInTheDocument();
  });

  test('should render Image component default url', () => {
    const { getByTestId } = renderRouterTest(
      <Image url={IMAGE.blackLogo} href='/' />
    );
    expect(getByTestId('image-link')).toBeInTheDocument();
  });

  test('should render Image component default', () => {
    const { getByTestId } = renderRouterTest(
      <Image />
    );
    expect(getByTestId('image')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = renderRouterTest(
      <Image url={IMAGE.blackLogo} href='/' />
    );
    expect(container).toMatchSnapshot();
  });
});
