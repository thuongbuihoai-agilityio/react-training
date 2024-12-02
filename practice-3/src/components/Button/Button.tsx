import { ButtonProps } from "@/types/button";
import React, { memo } from "react";
import "./button.css"

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`btn btn__${className}`} >
      {text}
    </button>
  );
}

export default memo(Button);
