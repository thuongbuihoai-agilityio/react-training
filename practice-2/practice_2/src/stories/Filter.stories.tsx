import React from "react";
import Filter from "../components/Filter/Filter/Filter";
import { DEFAULT_CATEGORY } from "../constants/categories";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Filter",
  component: Filter,
};

export function Default() {
  return <Filter />;
}