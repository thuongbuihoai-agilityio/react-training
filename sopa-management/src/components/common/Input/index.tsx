import React, { memo } from 'react';
import './input.css';

export enum InputType {
  default = '',
  info = 'info',
  error = 'error'
}

export enum InputTheme {
  default = '',
  info = 'info',
  error = 'error'
}

interface IconProps {
  label?: string;
  type?: string;
  theme?: string;
}

const Input: React.FC<IconProps> = ({ label, type, theme }) => {
  let className = 'input';
  switch (type) {
    case InputType.info:
      className += ` input-${InputType.info}`;
      break;
    case InputType.error:
      className += ` input-${InputType.error}`;
      break;
    default:
      break;
  }

  let themes = 'label';
  switch (theme) {
    case InputTheme.info:
      themes += ` label-${InputTheme.info}`;
      break;
    case InputTheme.error:
      themes += ` label-${InputTheme.error}`;
      break;
    default:
      break;
  }

  return (
    <div className="input-wrapper">
      <label className={`${themes} input-${theme}`}>{label}</label>
      <input className={`${className} input-${type}`} />
    </div>
  );
};

export default memo(Input);
