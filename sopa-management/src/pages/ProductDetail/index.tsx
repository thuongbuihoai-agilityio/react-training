import {
  memo,
  useCallback,
useState
} from 'react';
import { useParams } from 'react-router-dom';

// Components
import Text,
{
  SizeType
} from '@components/common/Text';
import Price,
{
  PriceType
} from '@components/common/Price';
import Dropdown from '@components/common/Dropdown';
import Button,
{
  ButtonType
} from '@components/common/Button';
import Rating from '@common/Rating';
import RatingStar from '@common/Rating/RatingStar';

// Hooks
import { useFetchProductDetail } from '@hooks/useQuery';

// Constants
import { SIZE } from '@constants/common';

// Stores
import { useCartStore } from '@stores/cart';

// Styles
import './productDetail.css';
import Loading from '@components/common/Loading';

const ProductDetail = () => {
  // use useParams to get id
  const { id } = useParams();
const [selectedValue, setSelectedValue] = useState('');
  const { data: product, isLoading } = useFetchProductDetail(id);
  const {
    name,
    image,
    color,
    price,
    description,
    size
  } = product;

  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = useCallback(() => {
    addToCart(product, (selectedValue || size));
  }, [name, selectedValue]);

  const handleSelect = useCallback((value?: string) => {
    setSelectedValue(value as string);
  }, [selectedValue]);

  return (
    <div data-testid='detail' className='detail'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div data-testid='product-detail' className='detail-product'>
            <div className='detail-image'>
              <img src={image.url} alt={image.alt} />
            </div>
            <div className='detail-info'>
              <div className='detail-name'>
                <div className='detail-description'>
                  <Text text={name} type={SizeType.regular} />
                  <RatingStar
                    value='4.7(3205)'
                    type={SizeType.normal}
                    className='detail-rating'
                    classNameStar='rating-star'
                  />
                </div>
                <Price value={price} type={PriceType.tertiary} />
              </div>
              <Text text={`Color: ${color}`} type={SizeType.extraRegular} />
              <div className='detail-size'>
                <Text
                  text='Size'
                  className='detail-text-size'
                  type={SizeType.extraRegular}
                />
                <Dropdown
                  data={SIZE}
                  value={selectedValue || size}
                  onSetValue={(value?: string) => handleSelect(value)}
                />
              </div>
              <Button
                ariaLabel='Add to bag'
                children={`Add to bag $${price}`}
                type={ButtonType.secondary}
                className='detail-btn'
                onClick={handleAddToCart}
              />
              <Text className='detail-description' text={description} />
            </div>
          </div>
          <Rating />
        </>
      )}
    </div>
  );
};

export default memo(ProductDetail);
