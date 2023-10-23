import { memo } from 'react';

// Images
import { Trash } from '../../../../../public/images/icons';

// Interfaces
import { Product } from '../../../../interfaces/product';

// Components
import Button,
{
  ButtonType
} from '../../Button';
import Price,
{
  PriceType
} from '../../Price';
import Text,
{
  ThemeType
} from '../../Text';
import Counter from '../../Counter';
import Image from '../../Image';

interface CartItemProps {
  key?: string;
  cartItem: Product;
  onDecrement: () => void;
  onIncrement: () => void;
}
const CartItem: React.FC<CartItemProps> = ({
  key = '',
  cartItem,
  onDecrement,
  onIncrement
}) => {
  return (
    <div key={key} data-testid='cart-item' className='cart-item'>
      <div className='cart-info'>
        <figure className='cart-image'>
          <Image className='cart-image-item' url={cartItem?.image?.url} />
        </figure>
        <div className='cart-description'>
          <Text text={cartItem.name} className='cart-text' />
          <Text
            text={`Color: ${cartItem.color}`}
            type={ThemeType.highlightPrimary}
            className='cart-color'
          />
          <Text
            text={`Size: ${cartItem.size}`}
            type={ThemeType.highlightPrimary}
            className='cart-size'
          />
          <div className='card-quantity'>
            <Counter
              value={cartItem?.quantity}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
            />
            <Button
              children={<Trash />}
              type={ButtonType.btnIconSecondary}
              className='cart-btn'
            />
          </div>
        </div>
      </div>
      <Price
        value={cartItem.price}
        type={PriceType.tertiary}
        className='cart-price'
      />
    </div>
  );
};

export default memo(CartItem);
