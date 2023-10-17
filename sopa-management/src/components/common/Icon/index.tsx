import React, { memo, MouseEventHandler } from "react";
import "./icon.css";

export enum IconType {
  user = "user",
  cart = "cart",
  trash = "trash",
};

interface IconProps {
  iconName?: IconType;
  onClick?: MouseEventHandler<HTMLElement>;
};

const Icon: React.FC<IconProps> = ({
  iconName,
  onClick = () => {},
}) => {
  let className = "icon";
  switch (iconName) {
    case IconType.user:
      className += ` icon-${IconType.user}`;
      break;
    case IconType.cart:
      className += ` icon-${IconType.cart}`;
      break;
    case IconType.trash:
      className += ` icon-${IconType.trash}`;
      break;
    default:
      break;
  };

  return (
    <div
      data-testid="icon"
      className={`${className} icon-${iconName}`}
      onClick={onClick}
    />
  )
};

export default memo(Icon);
