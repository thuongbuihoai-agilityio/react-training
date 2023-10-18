import { memo } from "react"
import Text, { SizeType, ThemeType } from "../../common/Text";
import Price, { PriceType } from "../../common/Price";
import Logo from "../../common/Logo";
import './productCard.css';

interface ProductCardProps {
  name?: string;
  color?: string;
  price?: number;
  href: string;
  src: string;
  alt?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  color,
  price,
  href,
  src,
  alt
}) => {
  return (
    <div className="card">
      <Logo href={href} url={src} alt={alt} className="card-image" />
      <div className="card-item">
        <Text text={name} type={SizeType.regular} />
        <div className="card-info">
          <Text text={color} type={ThemeType.highlightPrimary} />
          <Price value={price} type={PriceType.primary} />
        </div>
      </div>
    </div>
  )
}

export default memo(ProductCard);