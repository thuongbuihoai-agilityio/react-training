import { memo } from 'react';

// Hooks
import { useInfiniteProducts } from '@hooks/useQuery';

// Components
import ProductCard from './ProductCard';
import Button,
{
  ButtonType
} from '@common/Button';
import Loading from '@common/Loading';

// Styles
import './productList.css';

const ProductList: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfiniteProducts();
  console.log('BASE_URL', import.meta.env.VITE_BASE_URL);

  return (
    <div data-testid='product' className='product'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div data-testid='product-list' className='product-list'>
            {data?.pages?.map((page, index) =>
                <ProductCard
                  key={index}
                  data={page}
                />
            )}
          </div>
          <div className='product-btn'>
            {hasNextPage && (
              <Button
                ariaLabel='Show more'
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
