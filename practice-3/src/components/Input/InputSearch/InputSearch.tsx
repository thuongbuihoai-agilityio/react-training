import React, { memo, useContext } from "react";
import "./inputSearch.css";

const InputSearch: React.FC = () => {  
  // const {setIsReload, setFilterInput} = useContext(LoadingContext);
  // const handleSearch = (e: { target: { value: string } }) => {
  //   const nameLike = {name_like:e.target.value};
  //   setFilterInput(nameLike);
  //   setIsReload(true);
  // }

  return (
    <div className="search">
      <input
        type="text"
        className="search__text"
        placeholder="Search item"
      />
    </div>
  );
}

export default memo(InputSearch);
