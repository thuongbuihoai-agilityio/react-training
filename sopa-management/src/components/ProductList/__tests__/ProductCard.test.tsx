// Libs
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

// Mocks
import { MOCK_PRODUCT } from '../../../__mocks__/product';

// Components
import ProductCard from '../ProductCard';

describe('ProductCard component', () => {
  test('should render ProductCard component', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <ProductCard
          href='/'
          src={MOCK_PRODUCT.image?.url}
          name={MOCK_PRODUCT.name}
          color={MOCK_PRODUCT.color}
          price={MOCK_PRODUCT.price}
        />
      </Router>
    );
    expect(getByTestId('product-card')).toBeInTheDocument();
  });

  test('should render ProductCard component by default', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <ProductCard
          href='/'
          src={MOCK_PRODUCT.image?.url}
        />
      </Router>
    );
    expect(getByTestId('product-card')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <ProductCard
          href='/'
          src={MOCK_PRODUCT.image?.url}
          name={MOCK_PRODUCT.name}
          color={MOCK_PRODUCT.color}
          price={MOCK_PRODUCT.price}
        />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
