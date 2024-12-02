import React from "react";
import headerLogo from "../assets/images/logo.svg"
import Header from "../components/header/Header";
import MENU_LIST from "../constants/menu";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Header",
  component: Header,
};

export function Default() {
  return <Header logo={headerLogo} menuList={MENU_LIST} />;
}
