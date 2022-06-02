import React from "react";
import {PRODUCT_CONTENT} from "../constants/product";
import ViewProductItem from "../components/ViewsProducts/ViewProductItem/ViewProductsItem";
import { Route, Routes } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/ViewProductItem",
  component: ViewProductItem,
};

const Default: React.FC = () => {
  return (
    <Routes>
      <Route element={<ViewProductItem product={PRODUCT_CONTENT} deleteProduct={function (id: string): void {
      throw new Error("Function not implemented.");
    } } />} />
    </Routes>
  );
}

export { Default };
