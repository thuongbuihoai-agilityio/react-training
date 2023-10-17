import React, { memo } from "react";
import Icon, { IconType } from "../Icon";
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
  type?: ButtonType;
  text?: string;
  disable?: boolean;
  icon?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  type = ButtonType.default,
  text = "",
  disable = false,
  icon = false,
  onClick = () => {},
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
      className={className}
      disabled={disable}
      onClick={onClick}>
      {text}
      {icon && <Icon iconName={IconType.trash} />}
    </button>
  );
};

export default memo(Button);
