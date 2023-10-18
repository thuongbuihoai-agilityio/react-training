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
  label?: string;
  type?: string;
  theme?: string;
  placeholder?: string;
  classNameInput?: string;
  classNameLabel?: string;
}

const Input: React.FC<IconProps> = ({
  label = '',
  type = InputType.default,
  theme = InputTheme.default,
  placeholder = '',
  classNameInput = 'input',
  classNameLabel = 'label'
}) => (
  <div data-testId='input-value' className='input-wrapper'>
    <label className={`${classNameLabel} label-${theme}`}>{label}</label>
    <input
      placeholder={placeholder}
      className={`${classNameInput} input-${type}`}
    />
  </div>
);

export default memo(Input);
