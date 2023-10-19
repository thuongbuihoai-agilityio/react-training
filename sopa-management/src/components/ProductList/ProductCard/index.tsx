import { memo } from 'react';
import { Link } from 'react-router-dom';

// Components
import Text,
{
  ThemeType
} from '../../common/Text';
import Price,
{
  PriceType
} from '../../common/Price';
import Logo from '../../common/Logo';

// Styles
import './productCard.css';

interface ProductCardProps {
  name?: string;
  color?: string;
  price?: number;
  href: string;
  src: string;
  alt?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name = '',
  color = '',
  price = 0,
  href,
  src,
  alt = ''
}) => {
  return (
    <div data-testId='product-card' className='card'>
      <div className='card-item'>
        <figure className='card-image'>
          <Logo href={href} url={src} alt={alt} className='card-image-item' />
        </figure>
        <div className='card-info'>
          <Link to={href} className='card-name'>
            {name}
          </Link>
          <div className='card-description'>
            <Text text={color} type={ThemeType.highlightPrimary} />
            <Price value={price} type={PriceType.primary} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
