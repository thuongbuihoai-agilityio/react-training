import React, { memo } from "react";
import Logo from "../Logo/Logo";
import url from "@/assets/images/logos/logos.png";
import backgroundUrl from "@/assets/images/backgrounds/slide-1.jpg";
import Menu from "../Menu/Menu";
import MENU_LIST from "@/constants/menu";
import Button from "../Button/Button";
import "./header.css";

const Header: React.FC = memo(() => {
  return (
    <>
      <header data-testid="header" className="header">
        <div className="header__logo">
          <Logo src={url} />
        </div>
        <div className="header__about">
          <Menu menuList={MENU_LIST} />
          <Button className="btn btn__primary" text="ORDER ONLINE" />
        </div>
      </header>
      <figure>
        <img src={backgroundUrl} className="header__img" alt="" />
      </figure>
    </>
  );
});

export default Header;
