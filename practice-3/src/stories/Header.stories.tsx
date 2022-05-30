import React from "react";
import Header from "../components/common/Header/Header";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Header",
  component: Header,
};

const Default: React.FC = () => {
  return <Header />;
}

export { Default };
