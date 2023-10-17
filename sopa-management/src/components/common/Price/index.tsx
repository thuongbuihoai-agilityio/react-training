import React, { memo } from "react";
import "./price.css";

export enum PriceType {
  default = "",
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
};

interface PriceProps {
  value?: number;
  type?: string;
}

const Price: React.FC<PriceProps> = ({
  value= "",
  type = PriceType.default,
}) => {
  let className = "price";
  switch (type) {
    case PriceType.primary:
      className += ` price-${PriceType.primary}`;
      break;
    case PriceType.secondary:
      className += ` price-${PriceType.secondary}`;
      break;
    case PriceType.tertiary:
      className += ` price-${PriceType.tertiary}`;
      break;
    default:
      break;
  };

  return (
    <p data-testid="price" className={`${className} price-${type}`}>
      ${value}
    </p>
  );
};

export default memo(Price);
