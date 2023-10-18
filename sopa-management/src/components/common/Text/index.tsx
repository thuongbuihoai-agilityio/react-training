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
  className?: string;
}

const Text: React.FC<TextProps> = ({
  text = 'Sopa',
  type = SizeType.default,
  className = ''
}) => (
  <p data-testid='text' className={`${className} text-${type}`}>
    {text}
  </p>
);

export default memo(Text);
