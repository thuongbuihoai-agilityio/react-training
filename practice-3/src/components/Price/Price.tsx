import { PriceProps } from "@/types/price";
import React, { memo } from "react";
import "./price.css";

const Price: React.FC<PriceProps> = ({ value }) => {
  return (
    <p className="price">
      ${value}
    </p>
  );
}

export default memo(Price);
