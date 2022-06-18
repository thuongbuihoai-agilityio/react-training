import React, { memo } from "react";
import { TitleProps } from "@/types/title";
import "./title.css";

const Title: React.FC<TitleProps> = memo(({ text="", className }) => {
  return (
    <h2 data-testid="title-test" className={className}>
      {text}
    </h2>
  );
});

export default Title;
