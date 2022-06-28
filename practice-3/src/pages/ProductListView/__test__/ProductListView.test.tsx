import "@testing-library/jest-dom";
import mockAxios from "@__mocks__/axios";
import ProductListView from "../ProductListView";
import Categories from "@components/Categories/Categories";
import Button from "@components/common/Button/Button/Button";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Link, Router } from "react-router-dom";
import { CATEGORIES_URL, PRODUCTS_URL } from "@constants/url";
import { getData } from "@helpers/fetchApi";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/categories";
import {
  PRODUCT_MOCKING,
  PRODUCT_MOCKING_LIST,
} from "@__mocks__/constants/product";
import { ProductContext } from "@common-types/product";
import { DataContext } from "@context/DataContext";
import { Action, DataState } from "@common-types/data";
import { dataReducer } from "@reducer/dataReducer";
import InputSearch from "@components/Input/InputSearch/InputSearch";

const contextProductMock: ProductContext = {
  products: PRODUCT_MOCKING_LIST,
  dispatch: jest.fn(),
  searchValue: "",
  setSearchValue: jest.fn(),
};

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
    expect(contextProductMock.dispatch).not.toHaveBeenCalled();
  });

  test("display product after inputSearch", async () => {
    act(() => {
      render(
        <DataContext.Provider value={contextProductMock}>
          <InputSearch />
        </DataContext.Provider>
      );
      const inputElement = screen.getByPlaceholderText(
        /Search item/i
      ) as HTMLInputElement;
      fireEvent.change(inputElement, { target: { value: "Cheese pocket" } });
      expect(inputElement.value).toBe("Cheese pocket");
    });
  });

  test("should get data when dispatch action GetProductSuccess", () => {
    const initialState: DataState = {
      products: PRODUCT_MOCKING_LIST,
    };
    const createProduct = {
      action: Action.GetProductSuccess,
      payload: PRODUCT_MOCKING_LIST,
    };
    const updatedState = dataReducer(initialState, createProduct);
    expect(updatedState).toEqual(updatedState);
  });

  test("should filter when click category", () => {
    const { getByTestId } = render(
      <DataContext.Provider value={contextProductMock}>
        <Categories />
      </DataContext.Provider>
    );
    const categoryItem = getByTestId("category-item");
    fireEvent.click(categoryItem);
    expect(contextProductMock.setSearchValue).toHaveBeenCalled();
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
