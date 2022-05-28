import React from "react";
import Title from "../components/Title/Title";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Title",
  component: Title,
};

const Default: React.FC = () => {
  return <Title text="BLACK FOREST" />;
}

export { Default };
