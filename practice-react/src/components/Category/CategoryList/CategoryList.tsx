import React from "react";
import { CategoryProps, CategoryType } from "@common-types/categoryList";
import "./categoryList.css";
import { Link } from "react-router-dom";

const CategoryList: React.FC<CategoryProps> = ({ categoryList }) => {
  const renderCategoryList = (list: CategoryType[]) => {
    return list.map((item) => (
      <div className="categoryList__list" key={item.key}>
        <figure className="categoryList__image">
          <img className="categoryList__images" src={item.src} alt={item.alt} />
        </figure>
        <Link className="categoryList__text" to="/products">
          <p>{item.text}</p>
        </Link>
      </div>
    ));
  };

  return (
    <div data-testid="category-list" className="categoryList">
      {renderCategoryList(categoryList)}
    </div>
  );
};

export default CategoryList;
