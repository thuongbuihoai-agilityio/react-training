import React, { memo } from "react";
import CategoryList from "./CategoryList/CategoryList";

const Categories: React.FC = memo(() => {
  return (
    <div data-testid="categories" className="categories">
      <p className="categories__title">Categories</p>
      <CategoryList type="select" isSelect={true} />
    </div>
  );
});

export default Categories;
