import React, { memo } from "react";
import { TitleProps } from "@/types/title";
import "./title.css";

const Title: React.FC<TitleProps> = ({ text, className }) => {

  return (
    <h2 data-testid="title-test" className={className}>
      {text}
    </h2>
  );
}

export default memo(Title);
