import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ViewProductList from "../ProductListView";
import { createMemoryHistory } from "history";
import { Link, Router } from "react-router-dom";
import { Search } from "@/types/search";
import { SearchContext } from "@/context/SearchContext";
import Categories from "@/components/Categories/Categories";
import mockAxios from "@/__mocks__/axios";
import { PRODUCT_MOCKING_LIST } from "@/constants/product";
import { CATEGORIES_URL, PRODUCTS_URL } from "@/constants/url";
import { get } from "@/helpers/fetchApi";
import { CATEGORY_MOCKING_LIST } from "@/constants/categories";
import Button from "@/components/common/Button/Button";

const contextValueMockSearch: Search = {
  setSearchValue: jest.fn(),
  searchValue: "",
};

describe("ViewProductItem component", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test("get product list should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: PRODUCT_MOCKING_LIST });
    const result = await get(PRODUCTS_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(PRODUCTS_URL);
    expect(result).toEqual(PRODUCT_MOCKING_LIST);
  });

  test("get categories should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: CATEGORY_MOCKING_LIST });
    const result = await get(CATEGORIES_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(CATEGORIES_URL);
    expect(result).toEqual(CATEGORY_MOCKING_LIST);
  });

  test("should render product list view component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
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
      </SearchContext.Provider>
    );
    const categoryItem = getByTestId("category-item");
    fireEvent.click(categoryItem);
    expect(contextValueMockSearch.setSearchValue).toHaveBeenCalled();
  });

  test("Redirect to product page when click button 'View all products'", async () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <Link to="/products">
          <Button className="btn btn__secondary" text="VIEW ALL PRODUCTS" />
        </Link>
      </Router>
    );

    fireEvent.click(getByText("VIEW ALL PRODUCTS"));
    expect(history.push).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <ViewProductList />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
