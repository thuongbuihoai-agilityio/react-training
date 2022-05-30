import React, { memo } from "react";
import {InputProps} from "../../../types/input";

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
    <input
      id={id}
      onChange={onChange}
      type={type}
      name={name}
      className={className}
      defaultValue={value}
      min={min}
      multiple={multiple}
    />
  );
}

export default memo(Input);
