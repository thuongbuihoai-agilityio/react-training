// Libs
import '@testing-library/jest-dom';

// Mocks
import { MOCK_PRODUCT } from '../../../../__mocks__/product';

// Components
import { renderRouterTest } from '../../../../helpers/testUtils';
import Card from '..';

describe('Card component', () => {
  test('should render Card component', () => {
    const { getByTestId } = renderRouterTest(
      <Card
        href='/'
        src={MOCK_PRODUCT.image?.url}
        name={MOCK_PRODUCT.name}
        color={MOCK_PRODUCT.color}
        price={MOCK_PRODUCT.price}
      />
    );
    expect(getByTestId('card')).toBeInTheDocument();
  });

  test('should render Card component by default', () => {
    const { getByTestId } = renderRouterTest(
      <Card href='/' src={MOCK_PRODUCT.image?.url} />
    );
    expect(getByTestId('card')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = renderRouterTest(
      <Card
        href='/'
        src={MOCK_PRODUCT.image?.url}
        name={MOCK_PRODUCT.name}
        color={MOCK_PRODUCT.color}
        price={MOCK_PRODUCT.price}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
