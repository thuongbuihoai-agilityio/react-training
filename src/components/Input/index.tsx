import React, { ChangeEventHandler, memo, MouseEventHandler } from 'react';
import styles from './input.module.css';

export enum InputType {
  primary = 'primary',
  secondary = 'secondary'
}

interface InputProps {
  type?: string;
  styleInput?: string;
  className?: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  type = '',
  styleInput = '',
  className = '',
  placeholder = '',
  onClick = () => {},
  onChange = () => {},
  onBlur = () => {}
}) => {
  return (
    <input
      data-testid='input-value'
      className={`${className} ${styles[`input-${styleInput}`]}`}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
    />
  );
};

export default memo(Input);
