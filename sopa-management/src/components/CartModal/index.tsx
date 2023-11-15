import { memo } from 'react';
import { shallow } from 'zustand/shallow';
import toast from 'react-hot-toast';

// Components
import Text, { SizeType } from '@common/Text';
import Button, { ButtonType } from '@common/Button';
import Price, { PriceType } from '@common/Price';
import Icon, { IconType } from '@components/common/Icon';
import CartItem from './CartItem';

// Interfaces
import { Product } from '@interfaces/product';

// Helpers
import { totalPrices } from '@helpers/common';

// Stores
import { useCartStore } from '@stores/cart';

// Constants
import { CONFIRM_MESSAGE } from '@constants/validate';


// Hooks
import { useMutationEditProductInCart } from '@hooks/useMutate';

// Styles
import './cartModal.css';

interface CartModalProps {
  onToggleModal?: () => void;
}
const CartModal = ({
  onToggleModal
}: CartModalProps) => {
  const [carts] = useCartStore((state) => [state.cart], shallow);
  const { mutate: putProduct } = useMutationEditProductInCart();

  const handleUpdateProduct = async (products: Product[]) => {
    const updatedProducts = [];
    for (const product of products) {
      const updatedProduct = await putProduct({
        ...product,
        quantity: product.quantity
      },
      {
        onError: (error) => {
          toast.error((error as { message: string }).message);
        },
        onSuccess: () => {
          updatedProducts.push(updatedProduct);
          toast.success(CONFIRM_MESSAGE.UPDATE_SUCCESS);
        },
      });
    }
  };

  return (
    <div data-testid='cart-modal' className='overlay'>
      <div className='cart'>
        <div className='cart-header'>
          <Text text='Cart' className='cart-text' />
          <Button
            ariaLabel='Close'
            children={<Icon iconName={IconType.close} />}
            type={ButtonType.btnIconPrimary}
            onClick={onToggleModal}
          />
        </div>
        <div className='card-body'>
          {carts ? (
            <>
              {carts?.map((cartItem: Product) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </>
          ) : (
            <Text
              text='No products in cart'
              type={SizeType.extraRegular}
              className='cart-message'
            />
          )}
        </div>
        <hr />
        <div className='cart-footer'>
          <Text text='Subtotal' className='cart-text' />
          <Price value={totalPrices(carts)} type={PriceType.tertiary} />
        </div>
        <Button
          children='Update'
          className='cart-update'
          onClick={() => handleUpdateProduct(carts)}
        />
      </div>
    </div>
  );
};

export default memo(CartModal);
