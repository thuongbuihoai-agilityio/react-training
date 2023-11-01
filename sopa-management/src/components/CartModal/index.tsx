import { memo } from 'react';

// Images
import { Close } from '@assets/icons';

// Components
import Text, { SizeType } from '@common/Text';
import Button,
{
  ButtonType
} from '@common/Button';
import Price,
{
  PriceType
} from '@common/Price';
import CartItem from './CartItem';

// Interfaces
import { Product } from '@interfaces/product';

// Helpers
import { totalPrices } from '@helpers/common';

// Stores
import { useCartStore } from '@stores/cart';

// Styles
import './cartModal.css';

interface CartModalProps {
  onToggleModal?: () => void;
}
const CartModal: React.FC<CartModalProps> = ({
  onToggleModal,
}) => {
  const { carts } = useCartStore();

  return (
    <div data-testid='cart-modal' className='overlay'>
      <div className='cart'>
        <div className='cart-header'>
          <Text text='Cart' className='cart-text' />
          <Button
            ariaLabel='Close'
            children={<Close />}
            type={ButtonType.btnIconPrimary}
            onClick={onToggleModal}
          />
        </div>
        <div className='card-body'>
          {carts.length
          ? <>
              {carts?.map((cartItem: Product) => (
                <CartItem
                  key={cartItem.id}
                  cartItem={cartItem}
                />
              ))}
            </>
          : <Text
              text='No products in cart'
              type={SizeType.extraRegular}
              className='cart-message'
            />
          }
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
