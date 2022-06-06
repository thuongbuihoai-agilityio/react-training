import { Action, initialState, searchReducer, SearchState } from "@/reducer/searchReducer";
import { createContext, useMemo, useReducer, useState } from "react";

export interface Search extends SearchState{
  setSearchValue?: Function;
}

const DEFAULT_STATE: Search = {
  searchValue: "",
};

export const SearchContext = createContext<Search>(DEFAULT_STATE);
const SearchProvider: React.FC<{children: JSX.Element[] | JSX.Element}> = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  console.log("state", state);
  const { searchValue } = state;
  const value = useMemo(() => ({
    searchValue,
    setSearchValue: (payload: string) => {
      dispatch({ action: Action.SetSearchValue, payload });
    },
  }), [searchValue]);

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider;
