import React from "react";
import Price from "@components/Price/Price";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Price",
  component: Price,
};

const Default: React.FC = () => {
  return <Price value={0} />;
}

export { Default };
