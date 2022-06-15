import useSWR from "swr";
import React, { useContext, useState } from "react";
import { CategoryProps } from "@/types/category";
import { SearchContext } from "@/context/SearchContext";
import { CATEGORIES_URL } from "@/constants/url";
import { get } from "@/helpers/fetchApi";
import "./categories.css";

const Categories: React.FC = () => {
  const { data } = useSWR(CATEGORIES_URL, get);
  const [activeId, setActiveId] = useState("");
  const { setSearchValue } = useContext(SearchContext);
  const handleSearch = (id: string) => (e: React.MouseEvent<HTMLElement>) => {
    const categoryId = { categoryId: e.currentTarget.dataset.index };
    setSearchValue?.(categoryId);
    setActiveId(id);
  };

  const handleDefaultCategory = () => {
    const categoryId = "";
    setSearchValue?.(categoryId);
    setActiveId("");
  };

  function renderCategoryList(data: []) {
    return data?.map((category: CategoryProps) => (
      <li
        data-index={category.id}
        className={`categories__item ${
          activeId === category.id ? "active" : "inactive"
        }`}
        key={category.id}
        onClick={handleSearch(category.id)}
      >
        {category.name}
      </li>
    ));
  }

  return (
    <div data-testid="categories" className="categories">
      <p className="categories__title">What are you looking for here?</p>
      <ul className="categories__list">
        <li
          data-testid="category-item"
          className={`categories__item ${
            activeId === "" ? "active" : "inactive"
          }`}
          onClick={handleDefaultCategory}
        >
          All
        </li>
        {renderCategoryList(data as [])}
      </ul>
    </div>
  );
};

export default Categories;
