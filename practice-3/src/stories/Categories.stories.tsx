import React from "react";
import Categories from "@components/Categories/Categories";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Categories",
  component: Categories,
};

const Default: React.FC = () => {
  return <Categories />;
}

export { Default };
