import React, { memo } from "react";
import styles from "./text.module.css";

export enum SizeType {
  default = "",
  normal = "normal",
  regular = "regular",
  medium = "medium",
  extraMedium = "extra-medium",
  large = "large",
}

export enum ThemeType {
  default = "",
  light = "light",
  dark = "dark",
  highlightPrimary = "highlight-primary",
  highlightSecondary = "highlight-secondary",
}

interface TextProps {
  size?: string;
  theme?: string;
  text?: string;
  className?: string;
}

const Text = React.forwardRef<HTMLInputElement, TextProps>(
  (
    { text = "Sopa", size = SizeType.default, theme = ThemeType.default, className = "" },
  ) => {
    return (
      <p
        data-testid="text"
        className={[
          styles[`${size ? `text-${size}` : `text-${theme}`}`],
          className].join(' ')}
        dangerouslySetInnerHTML={{ __html: `${text}` }}
      />
    );
  },
);

export default memo(Text);
