import React, { useContext, useState } from "react";
import { CategoryProps } from "@/types/category";
import { SearchContext } from "@/context/SearchContext";
import useSWR from "swr";
import { CATEGORIES_URL } from "@/constants/url";
import { get } from "@/helpers/fetchApi";
import "./categories.css";

const Categories: React.FC = () => {
  const { data } = useSWR(CATEGORIES_URL, get);
  function renderCategoryList(data: []) {
    return data?.map((category: CategoryProps) =>
      <li data-index={category.id} onClick={handleSearch(category.id)} key={category.id}
        className={`categories__item ${activeId === category.id ? "active" : "inactive"}`}>
        {category.name}
      </li>
    );
  }
  
  const [activeId, setActiveId] = useState("");
  const {setSearchValue} = useContext(SearchContext);
  const handleSearch = (id: string) => (e: React.MouseEvent<HTMLElement>) => {
    const categoryId = {categoryId : e.currentTarget.dataset.index};
    setSearchValue?.(categoryId);
    setActiveId(id);
  }

  const handleDefaultCategory = () => {
    const categoryId = "";
    setSearchValue?.(categoryId);
    setActiveId("");
  }


  return (
    <>
      <div data-testid="categories" className="categories">
        <p className="categories__title">What are you looking for here?</p>
          <ul className="categories__list">
            <li data-testid="category-item" onClick={handleDefaultCategory}
              className={`categories__item ${activeId === "" ? "active" : "inactive"}`}>All</li>
              {renderCategoryList(data as [])}
          </ul>
      </div>
    </>
  );
}

export default Categories;
