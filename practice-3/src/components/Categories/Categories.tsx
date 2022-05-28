import React from "react";
import "./categories.css";

const Category: React.FC = () => {

  return (
    <>
      <div className="categories">
        <p className="categories__title">What are you looking for here?</p>
          <ul className="categories__list">
            <li className="categories__item">All</li>
            <li className="categories__item">Breads</li>
            <li className="categories__item">Cakes</li>
            <li className="categories__item">Cookies</li>
            <li className="categories__item">Pastries</li>
            <li className="categories__item">Muffins</li>
          </ul>
      </div>
    </>
  );
}

export default Category;
