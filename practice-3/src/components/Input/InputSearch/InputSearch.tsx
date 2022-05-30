import React, { memo, useContext } from "react";
import { FilterContext } from "@/context/FilterContext";
import "./inputSearch.css";

const InputSearch: React.FC = () => {  
  const {setFilterInput} = useContext(FilterContext);
  const handleSearch = (e: { target: { value: string } }) => {
    const nameLike = {name_like:e.target.value};
    setFilterInput(nameLike);
  }

  return (
    <div className="search">
      <input
        onChange={handleSearch}
        type="text"
        className="search__text"
        placeholder="Search item"
      />
    </div>
  );
}

export default memo(InputSearch);
