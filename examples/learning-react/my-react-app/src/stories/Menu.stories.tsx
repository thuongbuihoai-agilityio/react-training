import React from "react";
import Menu from "../components/Menu/Menu";
import MENU_LIST from "../constants/menu";
<<<<<<<< HEAD:practices/practice_2/src/stories/Menu.stories.tsx
========
import Navigation from "../components/menu/Menu";
>>>>>>>> d410f08bff138e43305b9f4fa599febfcfb2f0df:examples/learning-react/my-react-app/src/stories/Menu.stories.tsx

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Menu",
  component: Menu,
};

export function Default() {
  return <Menu menuList={MENU_LIST} />;
}