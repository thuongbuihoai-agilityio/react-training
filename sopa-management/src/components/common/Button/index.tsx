import React, { ButtonHTMLAttributes, memo } from 'react';

// Styles
import './button.css';

export enum ButtonType {
  default = '',
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  btnIconPrimary = 'icon-primary',
  btnIconSecondary = 'icon-secondary'
}

interface ButtonProps {
  children?: string | JSX.Element;
  type?: ButtonType;
  disable?: boolean;
  submit?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  onClick?: () => void;
  onSubmit?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children = '',
  type = ButtonType.default,
  disable = false,
  submit,
  className = '',
  onClick = () => {},
  onSubmit = () => {}
}) => (
  <button
    data-testid='button'
    className={`${className} btn-${type}`}
    disabled={disable}
    type={submit}
    onClick={onClick}
    onSubmit={onSubmit}
  >
    {children}
  </button>
);

export default memo(Button);
