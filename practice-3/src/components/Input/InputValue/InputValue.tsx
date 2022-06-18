import { InputProps } from "@/types/input";
import React, { memo } from "react";

const InputValue: React.FC<InputProps> = memo(({
    id,
    className,
    value,
    type,
    min,
    name,
    multiple,
    onChange,
  }) => {
    return (
      <input
        id={id}
        className={className}
        value={value}
        type={type}
        min={min}
        name={name}
        multiple={multiple}
        onChange={onChange}
      />
    );
  }
);

export default InputValue;
