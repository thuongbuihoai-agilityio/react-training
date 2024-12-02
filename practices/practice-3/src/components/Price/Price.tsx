import React, { memo } from "react";
import { PriceProps } from "@/types/price";
import "./price.css";

const Price: React.FC<PriceProps> = memo(({ value, className }) => {
  return (
    <p data-testid="price" className={className}>
      ${value}
    </p>
  );
});

export default Price;
