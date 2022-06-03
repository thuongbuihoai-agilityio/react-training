import { createContext, useState } from "react";

export const FilterContext = createContext<any>({});
const MainContext: React.FC<{children: JSX.Element[]}> = ({ children }) => {
  const [filterInput, setFilterInput] = useState({});

  return (
    <FilterContext.Provider value={{ filterInput, setFilterInput }}>
      {children}
    </FilterContext.Provider>
  )
}

export default MainContext;
