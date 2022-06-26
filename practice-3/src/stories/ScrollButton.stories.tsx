import React from "react";
import ScrollButton from "@components/common/Button/ScrollButton/ScrollButton";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/ScrollButton",
  component: ScrollButton,
};

const Default: React.FC = () => {
  return (
    <ScrollButton
      className="btn__scroll"
      text={<i className="fa fa-arrow-alt-circle-up"></i>}
    />
  );
};

export { Default };
