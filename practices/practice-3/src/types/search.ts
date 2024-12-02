export interface Search extends SearchState{
  setSearchValue?: Function;
}

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