import React, { memo } from "react";
import { TitleProps } from "@/types/title";

const Text: React.FC<TitleProps> = ({ text, className }) => {

  return (
    <p className={className}>
      {text}
    </p>
  );
}

export default memo(Text);
