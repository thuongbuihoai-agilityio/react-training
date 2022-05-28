import { PriceProps } from "@/types/price";
import React, { memo } from "react";
import "./price.css";

const Price: React.FC<PriceProps> = ({ value, className }) => {
  return (
    <p className={className}>
      ${value}
    </p>
  );
}

export default memo(Price);
