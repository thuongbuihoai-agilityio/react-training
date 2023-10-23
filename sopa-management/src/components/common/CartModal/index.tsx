import { memo } from 'react';

// Images
import { Close } from '../../../../public/images/icons';

// Components
import Text from '../Text';
import Button,
{
  ButtonType
} from '../Button';
import Price,
{
  PriceType
} from '../Price';

// Interfaces
import { Product } from '../../../interfaces/product';

// Helpers
import { totalPrices } from '../../../helpers/common';

// Stores
import { useCartStore } from '../../../stores/cart';

// Styles
import './cartModal.css';
import CartItem from './CartItem';

interface CartModalProps {
  onToggleModal?: () => void;
}
const CartModal: React.FC<CartModalProps> = ({
  onToggleModal = () => {},
}) => {
  const { carts } = useCartStore();

  return (
    <div data-testid='cart-modal' className='overlay'>
      <div className='cart'>
        <div className='cart-header'>
          <Text text='Cart' className='cart-text' />
          <Button
            children={<Close />}
            type={ButtonType.btnIconPrimary}
            onClick={onToggleModal}
          />
        </div>
        <div className='card-body'>
          {carts?.map((cartItem: Product) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
            />
          ))}
        </div>
        <hr />
        <div className='cart-footer'>
          <Text text='Subtotal' className='cart-text' />
          <Price value={totalPrices(carts)} type={PriceType.tertiary} />
        </div>
      </div>
    </div>
  );
};

export default memo(CartModal);
