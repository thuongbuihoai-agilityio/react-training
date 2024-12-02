import Footer from "@/components/common/Footer/Footer";
import React from "react";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Footer",
  component: Footer,
};

const Default: React.FC = () => {
  return <Footer />;
}

export { Default };
