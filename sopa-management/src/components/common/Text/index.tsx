import React, { memo } from "react";
import styles from "./text.module.css";

export enum SizeType {
  default = "",
  normal = "normal",
  regular = "regular",
  medium = "medium",
  large = "large",
}

export enum ThemeType {
  default = "",
  light = "light",
  dark = "dark",
  highlight = "highlight"
}

interface TextProps {
  size?: string;
  theme?: string;
  text?: string;
}

const Text = React.forwardRef<HTMLInputElement, TextProps>(
  (
    { text = "Sopa", size = SizeType.default, theme = ThemeType.default },
    ref,
  ) => {
    return (
      <p
        ref={ref}
        data-testid="text"
        className={styles[`${size ? `text-${size}` : `text-${theme}`}`]}
        dangerouslySetInnerHTML={{ __html: `${text}` }}
      />
    );
  },
);

export default memo(Text);
