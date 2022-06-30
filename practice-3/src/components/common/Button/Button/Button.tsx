import React, { memo } from "react";
import { ButtonProps } from "@common-types/button";
import "./button.css";

const Button: React.FC<ButtonProps> = memo(
  ({ text, className, onClick, disabled }) => {
    return (
      <button
        className={`btn btn__${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
);

export default Button;
