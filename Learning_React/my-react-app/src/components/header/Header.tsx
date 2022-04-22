import React from "react";
import Navigation from "../menu/Menu";
import { MenuType } from "../../types/menu";
import Logo from "../logo/Logo";
import "./header.css";

export interface HeaderProps {
  logo: string,
  menuList: MenuType[]
}

export default function Header({
  logo,
  menuList,
}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <Logo logo={logo} />
      <Navigation menuList={menuList} />
    </header>
  );
}