import React from "react";
import InputSearch from "../components/Input/InputSearch/InputSearch";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/InputSearch",
  component: InputSearch,
};

const Default: React.FC = () => {
  return <InputSearch />;
}

export { Default };
