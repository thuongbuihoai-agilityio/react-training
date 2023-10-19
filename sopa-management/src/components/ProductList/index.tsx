import { memo } from 'react';

// Hooks
import { useProducts } from '../../hooks/useQuery';

// Components
import ProductCard from './ProductCard';
import Button,
{
  ButtonType
} from '../common/Button';

// Constants
import { Product } from '../../interfaces/product';

// Styles
import './productList.css';

const ProductList: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage
  } = useProducts();

  const isDisable = !hasNextPage || isFetchingNextPage;

  return (
    <div data-testId='product-list' className='product'>
      {isLoading ? (
        // TODO: I will create component Loading later
        <p>Loading...</p>
      ) : (
        <>
          <div className='product-list'>
            {data?.pages?.map((page) => (
              <>
                {page.map((product: Product) => (
                  <div key={product.id}>
                    <ProductCard
                      href={'/'}
                      src={product.image?.url}
                      name={product.name}
                      color={product.color}
                      price={product.price}
                    />
                  </div>
                ))}
              </>
            ))}
          </div>
          <div className='product-btn'>
            <Button
              children={
                isFetchingNextPage
                  ? 'Loading more...'
                  : hasNextPage
                  ? 'Show More'
                  : 'No more products'
              }
              type={ButtonType.primary}
              onClick={() => fetchNextPage()}
              disable={isDisable}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default memo(ProductList);
