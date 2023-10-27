import {
  memo,
  useCallback,
  useState
} from 'react';

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
import PopupDelete from '../../PopupDelete';

// Stores
import { useCartStore } from '../../../../stores/cart';
import { CONFIRM_MESSAGE } from '../../../../constants/validate';

// Constants

interface CartItemProps {
  key?: string;
  cartItem: Product;
}
const CartItem: React.FC<CartItemProps> = ({
  cartItem
}) => {
  const [openModalConfirm, setOpenModalConfirm] = useState<boolean>(false);

  const {
    increaseQuantity,
    decreaseQuantity,
    deleteCart
  } = useCartStore();

  const handleIncrement = useCallback(() => {
    increaseQuantity(cartItem.id)
  }, [cartItem]);

  const handleDecrement = useCallback(() => {
    decreaseQuantity(cartItem.id)
  }, [cartItem]);

  const handleOpenModalConfirm = useCallback(() => {
    setOpenModalConfirm(!openModalConfirm);
  }, [openModalConfirm]);

  const handleDeleteCart = useCallback(() => {
    deleteCart(cartItem.id);
  }, [cartItem]);

  return (
    <div data-testid='cart-item' className='cart-item'>
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
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
            />
            <Button
              children={<Trash />}
              type={ButtonType.btnIconSecondary}
              className='cart-btn'
              onClick={handleOpenModalConfirm}
            />
            {openModalConfirm && (
              <PopupDelete
                title={CONFIRM_MESSAGE.CONFIRM_DELETE}
                onCancel={handleOpenModalConfirm}
                onDelete={handleDeleteCart}
              />
            )}
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
