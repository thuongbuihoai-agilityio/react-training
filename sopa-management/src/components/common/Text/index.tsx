import React, { memo } from 'react';
import './text.css';

export enum SizeType {
  default = '',
  normal = 'normal',
  regular = 'regular',
  medium = 'medium',
  extraMedium = 'extra-medium',
  large = 'large'
}

export enum ThemeType {
  default = '',
  light = 'light',
  dark = 'dark',
  highlightPrimary = 'highlight-primary',
  highlightSecondary = 'highlight-secondary'
}

interface TextProps {
  type?: string;
  text?: string;
}

const Text: React.FC<TextProps> = ({
  text = 'Sopa',
  type = SizeType.default
}) => {
  let className = 'text';
  switch (type) {
    case SizeType.normal:
      className += ` text-${SizeType.normal}`;
      break;
    case SizeType.regular:
      className += ` ${SizeType.regular}`;
      break;
    case SizeType.medium:
      className += ` text-${SizeType.medium}`;
      break;
    case SizeType.extraMedium:
      className += ` text-${SizeType.extraMedium}`;
      break;
    case SizeType.large:
      className += ` text-${SizeType.large}`;
      break;
    case ThemeType.light:
      className += ` text-${ThemeType.light}`;
      break;
    case ThemeType.dark:
      className += ` text-${ThemeType.dark}`;
      break;
    case ThemeType.highlightPrimary:
      className += ` text-${ThemeType.highlightPrimary}`;
      break;
    case ThemeType.highlightSecondary:
      className += ` text-${ThemeType.highlightSecondary}`;
      break;
    default:
      break;
  }

  return (
    <p data-testid='text' className={`${className} text-${type}`}>
      {text}
    </p>
  );
};

export default memo(Text);
