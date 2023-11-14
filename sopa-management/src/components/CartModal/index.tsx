import { memo, useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

// Components
import Text, { SizeType } from '@common/Text';
import Button, { ButtonType } from '@common/Button';
import Price, { PriceType } from '@common/Price';
import CartItem from './CartItem';

// Hooks
import { useFetchCartProduct } from '@hooks/useQuery';

// Interfaces
import { Product } from '@interfaces/product';

// Helpers
import { totalPrices } from '@helpers/common';

// Stores
import { useCartStore } from '@stores/cart';

// Styles
import './cartModal.css';
import Icon, { IconType } from '@components/common/Icon';

interface CartModalProps {
  onToggleModal?: () => void;
}
const CartModal = ({
  onToggleModal,
}: CartModalProps) => {
  const { carts, setCarts } = useCartStore(
    useShallow((state) => ({
      carts: state.carts,
      setCarts: state.setCarts
    }))
  );

  const { data } = useFetchCartProduct();

  useEffect(() => {
    if (data) {
      setCarts(data);
    }
  }, [data]);

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
      </div>
    </div>
  );
};

export default memo(CartModal);
