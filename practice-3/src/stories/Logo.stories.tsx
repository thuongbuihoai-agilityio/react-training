import React from "react";
import Logo from "@/components/common/Logo/Logo";
import url from "@/assets/images/logos/logos.png";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Logo",
  component: Logo,
};

const Default: React.FC = () => {
  return <Logo src={url} />;
}

export { Default };
