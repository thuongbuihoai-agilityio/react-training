import React from "react";
import Navigation from "../components/common/Navigation/Navigation";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Navigation",
  component: Navigation,
};

const Default: React.FC = () => {
  return <Navigation />;
}

export { Default };
