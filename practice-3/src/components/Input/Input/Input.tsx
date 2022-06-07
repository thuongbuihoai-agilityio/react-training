import React, { memo } from "react";
import { InputProps } from "@/types/input";

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  className,
  type,
  name,
  value,
  min,
  multiple,
}) => {
  return (
    <input
      data-testid="input"
      id={id}
      className={className}
      type={type}
      name={name}
      min={min}
      value={value}
      multiple={multiple}
      onChange={onChange}
    />
  );
};

export default memo(Input);
