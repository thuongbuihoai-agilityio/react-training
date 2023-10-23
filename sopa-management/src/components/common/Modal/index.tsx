import { memo } from 'react';

// Images
import {
  Close,
  Trash
} from '../../../../public/images/icons';

// Components
import Image from '../Image';
import Text,
{
  ThemeType
} from '../Text';
import Counter from '../Counter';
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
import './modal.css';

interface ModalProps {
  onToggleModal?: () => void;
}
const Modal: React.FC<ModalProps> = ({
  onToggleModal = () => {},
}) => {
  const { carts } = useCartStore();

  const handleIncrement = () => {
    // TODO: I will handle in feature/update-cart
  };

  const handleDecrement = () => {
    // TODO: I will handle in feature/update-cart
  };

  return (
    <div data-testid='modal' className='overlay'>
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
          {carts?.map((item: Product) => (
            <div className='cart-item'>
              <div className='cart-info'>
                <figure className='cart-image'>
                  <Image className='cart-image-item' url={item?.image?.url} />
                </figure>
                <div className='cart-description'>
                  <Text text={item.name} className='cart-text' />
                  <Text
                    text={`Color: ${item.color}`}
                    type={ThemeType.highlightPrimary}
                    className='cart-color'
                  />
                  <Text
                    text={`Size: ${item.size}`}
                    type={ThemeType.highlightPrimary}
                    className='cart-size'
                  />
                  <div className='card-quantity'>
                    <Counter
                      value={item?.quantity}
                      onDecrement={handleDecrement}
                      onIncrement={handleIncrement}
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
                value={item.price}
                type={PriceType.tertiary}
                className='cart-price'
              />
            </div>
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

export default memo(Modal);
