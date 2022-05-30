import { TitleProps } from "@/types/title";
import React, { memo } from "react";
import "./title.css";

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <h2 className={className}>
      {text}
    </h2>
  );
}

export default memo(Title);
