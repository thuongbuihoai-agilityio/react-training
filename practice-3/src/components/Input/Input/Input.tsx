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
  multiple
}) => {

  return (
    <input data-testid="input"
      id={id}
      onChange={onChange}
      type={type}
      name={name}
      className={className}
      value={value}
      min={min}
      multiple={multiple}
    />
  );
}

export default memo(Input);
