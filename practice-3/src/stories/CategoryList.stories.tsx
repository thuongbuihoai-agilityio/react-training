import React from "react";
import CategoryList from "@components/Categories/CategoryList/CategoryList";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/CategoryList",
  component: CategoryList,
};

const Default: React.FC = () => {
  return <CategoryList />;
}

export { Default };
