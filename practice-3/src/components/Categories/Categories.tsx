import React, { useContext, useState } from "react";
import useCategories from "@/hooks/useCategories";
import { CategoryProps } from "@/types/category";
import { FilterContext } from "@/context/FilterContext";
import "./categories.css";

const Categories: React.FC = () => {
  const [activeId, setActiveId] = useState("");
  const {setFilterInput} = useContext(FilterContext);
  const handleSearch = ( id: string) => (e: React.MouseEvent<HTMLElement>) => {
    const categoryId = {categoryId : e.currentTarget.dataset.index};
    setFilterInput(categoryId);
    setActiveId(id);
  }

  const handleDefaultCategory = () => {
    const categoryId = "";
    setFilterInput(categoryId);
    setActiveId("");
  }

  const {categories} = useCategories();
  function renderCategoryList(categories: []) {
    return categories?.map((category: CategoryProps) =>
      <li data-index={category.id} onClick={handleSearch(category.id)} key={category.id}
        className={`categories__item ${activeId === category.id ? "active" : "inactive"}`}>
        {category.name}
      </li>
    );
  }

  return (
    <>
      <div data-testid="categories" className="categories">
        <p className="categories__title">What are you looking for here?</p>
          <ul className="categories__list">
            <li data-testid="category-item" onClick={handleDefaultCategory}
              className={`categories__item ${activeId === "" ? "active" : "inactive"}`}>All</li>
              {renderCategoryList(categories as [])}
          </ul>
      </div>
    </>
  );
}

export default Categories;
