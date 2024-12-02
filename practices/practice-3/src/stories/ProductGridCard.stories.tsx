import React from "react";
import ProductGridCard from "@/pages/ProductGridCard/ProductGridCard";
import { PRODUCT_MOCKING } from "@/constants/product";
import { BrowserRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/ProductGridCard",
  component: ProductGridCard,
};

const Default: React.FC = () => {
  return (
    <BrowserRouter>
      <ProductGridCard product={PRODUCT_MOCKING} deleteProduct={() => {}} />
    </BrowserRouter>
  );
}

export { Default };
