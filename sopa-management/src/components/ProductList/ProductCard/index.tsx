import { memo } from 'react';

// Components
import Card from '../../common/Card';

// Interfaces
import { Product } from '../../../interfaces/product';

// Styles
import './productCard.css';

interface ProductCardProps {
  href: string;
  data: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  href,
  data,
}) => (
  <div className='product-card' data-testid='product-card'>
    {data.map((product) => (
      <Card
        href={href}
        src={product.image.url}
        name={product.name}
        color={product.color}
        price={product.price}
        alt={product.image.alt}
      />
    ))}
  </div>
);

export default memo(ProductCard);
