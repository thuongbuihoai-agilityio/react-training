import React from "react";
import useCategories from "../../hooks/useCategories";
import { CategoryProps } from "@/types/category";
import "./categories.css";

const Category: React.FC = () => {
  const {categories} = useCategories();
  function renderCategoryList(categories: []) {
    return categories?.map((category: CategoryProps) =>
      <li  key={category.id} className="categories__item">
        {category.name}
      </li>
    );
  }

  return (
    <>
      <div className="categories">
        <p className="categories__title">What are you looking for here?</p>
          <ul className="categories__list">
            <li className="categories__item">All</li>
            {renderCategoryList(categories as [])}
          </ul>
      </div>
    </>
  );
}

export default Category;
