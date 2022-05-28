import React from "react";
import Button from "../components/Button/Button";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Button",
  component: Button,
};

const Primary: React.FC = () => {
  return <Button text="View all products" className="primary" />;
}

export { Primary };
