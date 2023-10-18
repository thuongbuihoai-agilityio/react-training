import React, { memo } from 'react';

// Styles
import './price.css';

export enum PriceType {
  default = '',
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary'
}

interface PriceProps {
  value?: number;
  type?: string;
  className?: string;
}

const Price: React.FC<PriceProps> = ({
  value = '',
  type = PriceType.default,
  className = ''
}) => (
  <p data-testid='price' className={`${className} price-${type}`}>
    ${value}
  </p>
);

export default memo(Price);
