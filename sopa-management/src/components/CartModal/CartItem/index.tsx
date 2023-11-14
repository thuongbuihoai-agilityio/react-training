import {
  useCallback,
  useState
} from 'react';
import toast from 'react-hot-toast';

// Interfaces
import { Product } from '@interfaces/product';

// Components
import Button,
{
  ButtonType
} from '@common/Button';
import Price,
{
  PriceType
} from '@common/Price';
import Text,
{
  ThemeType
} from '@common/Text';
import Icon,
{
  IconType
} from '@components/common/Icon';
import Counter from '@common/Counter';
import Image from '@common/Image';
import PopupDelete from '@common/PopupDelete';

// Stores
import { useCartStore } from '@stores/cart';
import { CONFIRM_MESSAGE } from '@constants/validate';

// Hooks
import { useMutationEditProductInCart } from '@hooks/useMutate';

interface CartItemProps {
  cartItem: Product;
}

const CartItem = ({
  cartItem
}: CartItemProps) => {
  const [openModalConfirm, setOpenModalConfirm] = useState<boolean>(false);
  const { mutate: putProduct } = useMutationEditProductInCart();

  const { deleteCart } = useCartStore();

  const handleIncrement = useCallback(() => {
    putProduct({
      ...cartItem,
      quantity: cartItem.quantity + 1
    });
  }, [cartItem]);

  const handleDecrement = useCallback(() => {
    const checkQuantity = cartItem.quantity > 1
      ? cartItem.quantity - 1
      : cartItem.quantity;

    putProduct({
      ...cartItem,
      quantity: checkQuantity
    });
  }, [cartItem]);

  const handleOpenModalConfirm = useCallback(() => {
    setOpenModalConfirm(!openModalConfirm);
  }, [openModalConfirm]);

  const handleDeleteCart = useCallback(() => {
    deleteCart(cartItem.id);
    toast.success(CONFIRM_MESSAGE.DELETE_SUCCESS);
  }, [cartItem]);

  return (
    <div data-testid='cart-item' className='cart-item'>
      <div className='cart-info'>
        <div className='cart-image'>
          <Image
            className='cart-image-item'
            url={cartItem?.image?.url}
            alt={cartItem.image.alt}
            width={130}
            height={130}
          />
        </div>
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
              ariaLabel='Trash'
              children={<Icon iconName={IconType.trash} />}
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

export default CartItem;
