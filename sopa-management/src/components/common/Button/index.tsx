import React, { memo } from "react";
import "./button.css";

export enum ButtonType {
  default = "",
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  btnIconPrimary = "icon-primary",
  btnIconSecondary = "icon-secondary"
};

interface ButtonProps {
  children?: string | JSX.Element;
  type?: ButtonType;
  disable?: boolean;
  onClick?: () => void;
  onSubmit?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children = "",
  type = ButtonType.default,
  disable = false,
  onClick = () => {},
  onSubmit = () => {},
}) => {
  let className = "btn";
  switch (type) {
    case ButtonType.primary:
      className += ` btn-${ButtonType.primary}`;
      break;
    case ButtonType.secondary:
      className += ` btn-${ButtonType.secondary}`;
      break;
    case ButtonType.tertiary:
      className += ` btn-${ButtonType.tertiary}`;
      break;
    case ButtonType.btnIconPrimary:
      className += ` btn-${ButtonType.btnIconPrimary}`;
      break;
    case ButtonType.btnIconSecondary:
      className += ` btn-${ButtonType.btnIconSecondary}`;
      break;
    default:
      break;
  };

  return (
    <button
      data-testid="button"
      className={`${className} btn-${type}`}
      disabled={disable}
      onClick={onClick}
      onSubmit={onSubmit}
    >{children}</button>
  );
};

export default memo(Button);
