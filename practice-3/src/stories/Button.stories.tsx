import React from "react";
import Button from "@/components/common/Button/Button";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Button",
  component: Button,
};

const Default: React.FC = () => {
  return <Button text="Order online" className="primary" />;
}

const ButtonIcon: React.FC = () => {
  return <Button text={<i className="fa fa-trash"></i>} className="delete--storybook" />;
}

const ButtonHover: React.FC = () => {
  return <Button text="Add new product" className="add" />;
}

export { Default, ButtonIcon, ButtonHover };
