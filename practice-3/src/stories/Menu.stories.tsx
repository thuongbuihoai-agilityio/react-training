import React from "react";
import MENU_LIST from "@constants/menu";
import Menu from "@components/common/Menu/Menu";
import { BrowserRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Menu",
  component: Menu,
};

const Default: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu menuList={MENU_LIST} />
    </BrowserRouter>
  );
};

export { Default };
