import { memo } from "react";
import './modal.css';
import { Trash } from "../../../../public/images/icons";
import Image from "../Image";
import Text, { ThemeType } from "../Text";
import Counter from "../Counter";
import Button, { ButtonType } from "../Button";
import Price, { PriceType } from "../Price";
import { Product } from "../../../interfaces/product";
import { useCounterStore } from "../../../stores/counter";
import { getStorage } from "../../../helpers/storage";
import { totalPrices } from "../../../helpers/common";

const Modal: React.FC = () => {
  const { count, setCount } = useCounterStore();
  const cartData = getStorage('cart') || [];

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };


  return (
    <div className="cart">
      <div className="cart-header">
        <Text text="Cart" className="cart-text" />
        <Trash />
      </div>
      <div className="card-body">
        {cartData?.map((item: Product) => (
          <div className="cart-item">
            <div className="cart-info">
              <figure className="cart-image">
                <Image className="cart-image-item" url={item.image.url} />
              </figure>
              <div className="cart-description">
                <Text text={item.name} className="cart-text" />
                <Text text={`Color: ${item.color}`} type={ThemeType.highlightPrimary} className="cart-color" />
                <Text text={`Size: ${item.size}`} type={ThemeType.highlightPrimary} className="cart-size" />
                <div className="card-quantity">
                  <Counter
                    value={item?.quantity}
                    onDecrement={handleDecrement}
                    onIncrement={handleIncrement}
                  />
                  <Button children={<Trash />} type={ButtonType.btnIconSecondary} className="cart-btn" />
                </div>
              </div>
            </div>
            <Price value={item.price} type={PriceType.tertiary} className="cart-price" />
          </div>
        ))}
      </div>
      <hr />
      <div className="cart-footer">
        <Text text="Subtotal" className="cart-text" />
        <Price value={totalPrices(cartData)} type={PriceType.tertiary} />
      </div>
    </div>
  )
}

export default memo(Modal);
