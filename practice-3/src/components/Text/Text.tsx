import { TitleProps } from "@/types/title";
import React, { memo } from "react";
import "./text.css";

const Text: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <p className={className}>
      {text}
    </p>
  );
}

export default memo(Text);
