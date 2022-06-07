import React, { memo } from "react";
import { ButtonProps } from "@/types/button";
import "./button.css";

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn__${className}`}>
      {text}
    </button>
  );
};

export default memo(Button);
