import {
  memo,
  useCallback
} from 'react';
import { useParams } from 'react-router-dom';

// Components
import Text,
{
  SizeType
} from '../../components/common/Text';
import Price, { PriceType } from '../../components/common/Price';
import Dropdown from '../../components/common/Dropdown';
import Button,
{
  ButtonType
} from '../../components/common/Button';
import Rating from '../../components/Rating';
import RatingStar from '../../components/Rating/RatingStar';

// Hooks
import { useFetchProductDetail } from '../../hooks/useQuery';

// Constants
import { SIZE } from '../../constants/common';

// Stores
import { useCartStore } from '../../stores/cart';

// Styles
import './productDetail.css';

const ProductDetail = () => {
  // use useParams to get id
  const { id } = useParams();
  const { data: product } = useFetchProductDetail(id);
  const {
    name,
    image,
    color,
    price,
    description
  } = product;

  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = useCallback(() => {
    addToCart(product);
  }, [name]);

  return (
    <div data-testid='detail' className='detail'>
      <div className='detail-product'>
        <figure>
          <img className='detail-image' src={image.url} alt={image.alt} />
        </figure>
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
            <Dropdown data={SIZE} />
          </div>
          <Button
            children={`Add to bag $${price}`}
            type={ButtonType.secondary}
            className='detail-btn'
            onClick={handleAddToCart}
          />
          <Text className='detail-description' text={description} />
        </div>
      </div>
      <Rating />
    </div>
  );
};

export default memo(ProductDetail);
