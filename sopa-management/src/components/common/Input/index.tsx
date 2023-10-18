import React, { memo } from 'react';

// Styles
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
  value?: string | number;
  label?: string;
  type?: string;
  theme?: string;
  placeholder?: string;
  classNameInput?: string;
  classNameLabel?: string;
}

const Input: React.FC<IconProps> = ({
  value,
  label = '',
  type = InputType.default,
  theme = InputTheme.default,
  placeholder = '',
  classNameInput = 'input',
  classNameLabel = 'label'
}) => (
  <div data-testId='input-value' className='input-wrapper'>
    {label && (
      <label className={`${classNameLabel} label-${theme}`}>{label}</label>
    )}
    <input
      value={value}
      placeholder={placeholder}
      className={`${classNameInput} input-${type}`}
    />
  </div>
);

export default memo(Input);
