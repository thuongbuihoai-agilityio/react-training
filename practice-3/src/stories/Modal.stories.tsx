import React from "react";
import ModalUpdate from "@/components/Modal/ModalUpdate/ModalUpdate";
import { PRODUCT_MOCKING } from "@/constants/product";

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
