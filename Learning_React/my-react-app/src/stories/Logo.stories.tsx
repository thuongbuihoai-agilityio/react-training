import React from "react";
import headerLogo from "../assets/images/logo.svg";
import Logo from "../components/logo/Logo";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Logo",
  component: Logo,
};

export function Default() {
  return <Logo logo={headerLogo} />;
}
