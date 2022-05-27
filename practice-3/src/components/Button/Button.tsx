import { ButtonProps } from "@/types/button";
import React, { memo } from "react";
import "./button.css"

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className={`btn btn__test`} >
      {text}
    </button>
  );
}

export default memo(Button);
