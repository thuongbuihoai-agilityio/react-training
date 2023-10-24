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
} from '../../components/common/Text';
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

// Stores
import { useCartStore } from '../../stores/cart';

// Styles
import './productDetail.css';
import Toast, { ToastType } from '../../components/Toast';

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
  const [toast, setToast] = useState<boolean>(false)
  const addToCart = useCartStore((state) => state.addToCart);

  const handleShowToast = useCallback(() => {
    setToast(!toast);
  }, [toast]);

  const handleAddToCart = useCallback(() => {
    addToCart(product);
    handleShowToast();
  }, [name, toast]);

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
      {toast && <Toast title='Success' message='OK' type={ToastType.success} />}
    </div>
  );
};

export default memo(ProductDetail);
