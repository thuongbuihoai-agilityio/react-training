import { memo, useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import Text, { SizeType } from '../../components/common/Text';
import Price from '../../components/common/Price';
import Dropdown from '../../components/common/Dropdown';
import Button,
{
  ButtonType
} from '../../components/common/Button';

// Images
import { Star } from '../../../public/images/icons';

// Hooks
import { useFetchProductDetail } from '../../hooks/useQuery';

// Constants
import { SIZE } from '../../constants/common';

// Styles
import './productDetail.css';
import { Product } from '../../interfaces/product';
import { getStorage, setStorage } from '../../helpers/storage';

const ProductDetail = () => {
  // use useParams to get id
  const { id } = useParams();
  const { data: product } = useFetchProductDetail(id);
  const { name, image, color, price, description } = product;

  const initialCart = getStorage('cart') || [];
  console.log('initialCart', initialCart);
  
  const [cart, setCart] = useState(initialCart);

  const handleAddToCart = () => {
    const existingProduct = cart?.find((item: Product) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart?.map((item: Product) => {
        if (item.id === existingProduct.id) {
          return { ...item, quantity: item?.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
      setStorage('cart', updatedCart)
    } else {
      const newProduct = { ...product, quantity: 1 };
      const newCart = [...cart, newProduct];
      setCart(newCart);
      setStorage('cart', newCart)
    }
  }

  return (
    <div data-testid='detail' className='detail'>
      <figure>
        <img className='detail-image' src={image.url} alt={image.alt} />
      </figure>
      <div className='detail-info'>
        <div className='detail-name'>
          <div className='detail-description'>
            <Text text={name} type={SizeType.regular} />
            <div className='detail-rating'>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <Text text='4.7(3205)' type={SizeType.normal} />
            </div>
          </div>
          <Price value={price} />
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
        <Text type={SizeType.extraRegular} text={description} />
      </div>
    </div>
  );
};

export default memo(ProductDetail);
