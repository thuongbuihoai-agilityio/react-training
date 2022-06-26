import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PRODUCT_MOCKING } from "@__mocks__/constants/product";
import ProductListCard from "@pages/ProductListCard/ProductListCard";


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/ProductListCard",
  component: ProductListCard,
};

const Default: React.FC = () => {
  return (
    <BrowserRouter>
      <ProductListCard product={PRODUCT_MOCKING} />
    </BrowserRouter>
  );
}

export { Default };
