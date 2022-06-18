import React from "react";
import { PRODUCT_MOCKING } from "@/__mocks__/constants/product";
import ProductGridCard from "@/pages/ProductGridCard/ProductGridCard";
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
