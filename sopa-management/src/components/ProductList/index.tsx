import { memo } from 'react';

// Hooks
import { useInfiniteProducts } from '../../hooks/useQuery';

// Components
import ProductCard from './ProductCard';
import Button,
{
  ButtonType
} from '../common/Button';

// Styles
import './productList.css';

const ProductList: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteProducts();

  return (
    <div data-testId='product' className='product'>
      {isLoading ? (
        // TODO: I will create component Loading later
        <p>Loading...</p>
      ) : (
        <>
          <div data-testId='product-list' className='product-list'>
            {data?.pages?.map((page) =>
                <ProductCard
                  data={page}
                />
            )}
          </div>
          <div className='product-btn'>
            {hasNextPage && (
              <Button
                children={isFetchingNextPage ? 'Loading more...' : 'Show More'}
                type={ButtonType.primary}
                onClick={() => fetchNextPage()}
                disable={isFetchingNextPage}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default memo(ProductList);
