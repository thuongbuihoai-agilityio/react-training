import { initialState, searchReducer } from "@/reducer/searchReducer";
import { Action, Search } from "@/types/search";
import { createContext, useMemo, useReducer } from "react";

const DEFAULT_STATE: Search = {
  searchValue: "",
};

export const SearchContext = createContext<Search>(DEFAULT_STATE);
const SearchProvider: React.FC<{children: JSX.Element[] | JSX.Element}> = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

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
