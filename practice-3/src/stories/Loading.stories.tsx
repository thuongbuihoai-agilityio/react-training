import React from "react";
import Loading from "@/components/common/Loading/Loading";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Loading",
  component: Loading,
};

const Default: React.FC = () => {
  return <Loading />;
}

export { Default };
