import { fireEvent, render } from "@testing-library/react";
import { SearchContext } from "@/context/SearchContext";
import Categories from "../Categories";
import "@testing-library/jest-dom";
import { useState } from "react";
import mockAxios from "@/__mocks__/axios";
import { CATEGORY_MOCKING_LIST } from "@/__mocks__/constants/categories";
import { getData } from "@/helpers/fetchApi";
import { CATEGORIES_URL } from "@/constants/url";
import { Action, Search, SearchState } from "@/types/search";
import { searchReducer } from "@/reducer/searchReducer";

const contextValueMock: Search = {
  setSearchValue: jest.fn(),
  searchValue: "",
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Category component", () => {
  const setup = () => {
    const utils = render(<Categories />);
    const input = utils.getByTestId("category-item") as HTMLInputElement;
    return {
      input,
      ...utils,
    };
  };

  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(
      jest.requireActual("react").useState
    );
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test("get categories item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: CATEGORY_MOCKING_LIST });
    const result = await getData(CATEGORIES_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(CATEGORIES_URL);
    expect(result).toEqual(CATEGORY_MOCKING_LIST);
  });

  test("render category component", () => {
    const { getByTestId } = render(<Categories />);
    const categories = getByTestId("categories");
    expect(categories).toBeInTheDocument();
  });

  test("should filter when click category", () => {
    const { getByTestId } = render(
      <SearchContext.Provider value={contextValueMock}>
        <Categories />
      </SearchContext.Provider>
    );
    const categoryItem = getByTestId("category-item");
    fireEvent.click(categoryItem);
    expect(contextValueMock.setSearchValue).toHaveBeenCalled();
  });

  test("should return new state when dispatch action", () => {
    const initialState: SearchState = {
      searchValue: "",
    };
    const updateAction = {
      action: Action.SetSearchValue,
      payload: "1651999177368",
    };
    const updatedState = searchReducer(initialState, updateAction);
    expect(updatedState).toEqual(updatedState);
  });

  test("should render product by search category", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { id: "1651999177368" } });
    expect(input.id).toEqual("1651999177368");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <SearchContext.Provider value={contextValueMock}>
        <Categories />
      </SearchContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
