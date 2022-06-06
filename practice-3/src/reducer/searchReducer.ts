export interface SearchState {
  searchValue: string;
}

export enum Action {
  SetSearchValue = "SET_SEARCH_VALUE",
}

export interface SearchAction {
  action: Action;
  payload: string;
}

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
