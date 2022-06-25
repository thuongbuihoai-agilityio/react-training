import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductListView from "../ProductListView";
import { createMemoryHistory } from "history";
import { Link, Router } from "react-router-dom";
import { Search } from "@/types/search";
import { SearchContext } from "@/context/SearchContext";
import Categories from "@/components/Categories/Categories";
import mockAxios from "@/__mocks__/axios";
import { CATEGORIES_URL, PRODUCTS_URL } from "@/constants/url";
import { getData } from "@/helpers/fetchApi";
import { CATEGORY_MOCKING_LIST } from "@/__mocks__/constants/categories";
import { PRODUCT_MOCKING_LIST } from "@/__mocks__/constants/product";
import Button from "@/components/common/Button/Button/Button";
import { ProductContext } from "@/types/product";
import { mutate } from "swr";
import { DataContext } from "@/context/DataContext";

const contextValueMockSearch: Search = {
  setSearchValue: jest.fn(),
  searchValue: "",
};

const contextProductMock: ProductContext = {
  setProducts: jest.fn(),
  products: PRODUCT_MOCKING_LIST,
  mutate
}

describe("Product list view component", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test("get product list should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: PRODUCT_MOCKING_LIST });
    const result = await getData(PRODUCTS_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(PRODUCTS_URL);
    expect(result).toEqual(PRODUCT_MOCKING_LIST);
  });

  test("get categories should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: CATEGORY_MOCKING_LIST });
    const result = await getData(CATEGORIES_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(CATEGORIES_URL);
    expect(result).toEqual(CATEGORY_MOCKING_LIST);
  });

  test("should render product list view component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
         <ProductListView />
      </Router>
    );
    expect(getByTestId("view-product-list")).toBeInTheDocument();
  });

  test("should get product when run app", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <ProductListView />
        </Router>
      </DataContext.Provider>
    );
    const getProducts = getByTestId("view-product-list");
    fireEvent.click(getProducts);
    expect(contextProductMock.setProducts).not.toHaveBeenCalled();
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
        <ProductListView />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
