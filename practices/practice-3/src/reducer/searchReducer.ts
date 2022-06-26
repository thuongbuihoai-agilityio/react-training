import { Action, SearchAction, SearchState } from "@common-types/search";

const initialState: SearchState = {
  searchValue: "",
};

const searchReducer = (state: SearchState, actions: SearchAction): SearchState => {
  const { action, payload } = actions;
  if (action === Action.SetSearchValue) {
    return { ...state, searchValue: payload };
  }
  return state;
}

export { searchReducer, initialState };
