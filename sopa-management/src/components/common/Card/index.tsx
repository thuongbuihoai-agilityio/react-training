import { memo } from 'react';
import { Link } from 'react-router-dom';

// Components
import Text,
{
  ThemeType
} from '@common/Text';
import Price,
{
  PriceType
} from '@common/Price';
import Image from '@common/Image';

// Styles
import './card.css';

interface CardProps {
  key?: string;
  name?: string;
  color?: string;
  price?: number;
  href: string;
  src: string;
  alt?: string;
}

const Card: React.FC<CardProps> = ({
  name = '',
  color = '',
  price = 0,
  href,
  src,
  alt = ''
}) => {
  return (
    <div data-testid='card' className='card'>
      <div className='card-item'>
        <figure className='card-image'>
          <Image href={href} url={src} alt={alt} className='card-image-item' />
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

export default memo(Card);
