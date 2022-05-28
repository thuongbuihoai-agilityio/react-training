import React, { useContext } from "react";
import useCategories from "../../hooks/useCategories";
import { CategoryProps } from "../../types/category";
import "./categories.css";
import { FilterContext } from "../../context/FilterContext";

const Category: React.FC = () => {
  const {setFilterInput} = useContext(FilterContext);
  const handleSearch = (e: React.MouseEvent<HTMLElement>) => {
    const categoryId = {categoryId : e.currentTarget.dataset.index};
    console.log("category", categoryId);
    
    setFilterInput(categoryId);
  }

  const handleDefaultCategory = () => {
    const categoryId = "";
    setFilterInput(categoryId);
  }

  const {categories} = useCategories();
  function renderCategoryList(categories: []) {
    return categories?.map((category: CategoryProps) =>
      <li data-index={category.id} onClick={handleSearch} key={category.id} className="categories__item">
        {category.name}
      </li>
    );
  }

  return (
    <>
      <div className="categories">
        <p className="categories__title">What are you looking for here?</p>
          <ul className="categories__list">
            <li onClick={handleDefaultCategory} className="categories__item">All</li>
            {renderCategoryList(categories as [])}
          </ul>
      </div>
    </>
  );
}

export default Category;
