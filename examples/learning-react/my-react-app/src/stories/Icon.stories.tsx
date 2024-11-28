import React from "react";
import FeatureIcon from "../components/icons/icon";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/FeatureIcon",
  component: FeatureIcon,
};

export function Shipping() {
  return <FeatureIcon className="shipping" />;
}

export function Return() {
  return <FeatureIcon className="return" />;
}

export function Secure() {
  return <FeatureIcon className="secure" />;
}

export function Support() {
  return <FeatureIcon className="support" />;
}

export function Fabric() {
  return <FeatureIcon className="fabric" />;
}

export function Wood() {
  return <FeatureIcon className="wood" />;
}

export function TimeLess() {
  return <FeatureIcon className="timeless" />;
}
