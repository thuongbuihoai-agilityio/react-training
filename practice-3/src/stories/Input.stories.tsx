import React from "react";
import InputValue from "@components/Input/InputValue/InputValue";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/InputValue",
  component: InputValue,
};

const Number: React.FC = () => {
  return <InputValue type="number" min={0} className="input__number"/>;
};

const Text: React.FC = () => {
  return <InputValue type="text" className="input__value"/>;
};

export { Number, Text };
