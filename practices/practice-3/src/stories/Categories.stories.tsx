import React from "react";
import CategoryList from "@components/Categories/CategoryList/CategoryList";
import { DataContext } from "@context/DataContext";
import { PRODUCT_MOCKING_LIST } from "@__mocks__/constants/product";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/categories";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/CategoryList",
  component: CategoryList,
};

const value = ({
  products: PRODUCT_MOCKING_LIST,
  dispatch: () => {},
  searchValue: "",
  setSearchValue: () => {},
  categories: CATEGORY_MOCKING_LIST,
  setCategories: () => {},
});

const Default: React.FC = () => {
  return (
    <DataContext.Provider value={value}>
      <CategoryList />
    </DataContext.Provider>
  );
};

export { Default };
