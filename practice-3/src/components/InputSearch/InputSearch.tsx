import React, { memo, useContext } from "react";
import { SearchContext } from "@/context/SearchContext";
import "./inputSearch.css";

const InputSearch: React.FC = memo(() => {
  const { setSearchValue } = useContext(SearchContext);
  const handleSearch = (e: { target: { value: string } }) => {
    const nameLike = { name_like: e.target.value };
    setSearchValue?.(nameLike);
  };

  return (
    <div data-testid="input-search" className="search">
      <input
        className="search__text"
        type="text"
        placeholder="Search item"
        onChange={handleSearch}
      />
    </div>
  );
});

export default InputSearch;
