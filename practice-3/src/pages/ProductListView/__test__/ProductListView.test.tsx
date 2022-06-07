import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ViewProductList from "../ProductListView";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Search } from "@/types/search";
import {SearchContext} from "@/context/SearchContext";
import Categories from "@/components/Categories/Categories";
import mockAxios from "@/__mocks__/axios";
import { PRODUCT_MOCKING_LIST } from "@/constants/product";
import { PRODUCTS_URL } from "@/constants/url";
import { get } from "@/helpers/fetchApi";

const contextValueMockSearch: Search = {
  setSearchValue: jest.fn(),
  searchValue: ""
};

describe("ViewProductItem component", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test("get categories item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({data: PRODUCT_MOCKING_LIST});
    const result = await get(PRODUCTS_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(PRODUCTS_URL);
    expect(result).toEqual(PRODUCT_MOCKING_LIST);
  });

  test("should render ViewProductItem component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render (
      <Router location={history.location} navigator={history}>
        <ViewProductList />
      </Router>
    );
    expect(getByTestId("view-product-list")).toBeInTheDocument();
  });

  test("should filter when click category", () => {
    const { getByTestId } = render(
      <SearchContext.Provider value={contextValueMockSearch}>
        <Categories />
      </SearchContext.Provider>,
    );
    const categoryItem = getByTestId("category-item");
    fireEvent.click(categoryItem);
    expect(contextValueMockSearch.setSearchValue).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <ViewProductList />
      </Router>);
    expect(asFragment()).toMatchSnapshot();
  });
})