import React from "react";
import { PRODUCT_MOCKING } from "@/__mocks__/constants/product";
import ModalUpdate from "@/components/Modal/ModalUpdate/ModalUpdate";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/ModalUpdate",
  component: ModalUpdate,
};

const Default: React.FC = () => {
  return (
    <ModalUpdate
      hideModalUpdate={() => {}}
      product={PRODUCT_MOCKING}
      deleteImage={() => {}}
      updateProductDetail={() => {}}
    />
  );
};

export { Default };
