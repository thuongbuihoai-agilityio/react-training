import { Action, SearchAction, SearchState } from "@/types/search";

const initialState: SearchState = {
  searchValue: "",
};

function searchReducer(state: SearchState, actions: SearchAction): SearchState {
  const { action, payload } = actions;
  if (action === Action.SetSearchValue) {
    return { ...state, searchValue: payload };
  }
  return state;
}

export { searchReducer, initialState };
