import React from "react";
import { MenuType } from "@types/menu";
import "./menu.css"

interface NavigationProps {
  menuList: MenuType[];
}

export default function Navigation({ menuList }: NavigationProps): JSX.Element {
  function renderMenuList(list: MenuType[]) {
    return list.map((item) => <li className="nav__menu-item" key={item.key}>{item.label}</li>);
  }

  return (
    <nav className="nav">
      <i className="fa fa-bars nav__icon" />
      <ul className="nav__menu">{renderMenuList(menuList)}</ul>
    </nav>
  );
}