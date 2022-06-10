import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductGridView from "../ProductGridView";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { PRODUCT_MOCKING, PRODUCT_MOCKING_LIST } from "@/constants/product";
import { PRODUCTS_URL, PRODUCT_CRUD } from "@/constants/url";
import { create, get, remove } from "@/helpers/fetchApi";
import mockAxios from "@/__mocks__/axios";
import { Search } from "@/types/search";
import {SearchContext} from "@/context/SearchContext";
import Categories from "@/components/Categories/Categories";
import { useState } from "react";

const contextValueMockSearch: Search = {
  setSearchValue: jest.fn(),
  searchValue: ""
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("ViewProductItem component", () => {
  beforeEach(()=>{
    (useState as jest.Mock).mockImplementation(jest.requireActual("react").useState);
  })

  afterEach(() => {
    mockAxios.reset();
  });

  test("get categories item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({data: PRODUCT_MOCKING_LIST});
    const result = await get(PRODUCTS_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(PRODUCTS_URL);
    expect(result).toEqual(PRODUCT_MOCKING_LIST);
  });

  test("add new product item should call", async () => {
    mockAxios.post.mockResolvedValueOnce(PRODUCT_MOCKING);
    const result = await create(PRODUCT_CRUD, PRODUCT_MOCKING);
    expect(mockAxios.post).toHaveBeenCalledWith(PRODUCT_CRUD, PRODUCT_MOCKING);
    expect(result).toEqual(PRODUCT_MOCKING);
  });

  test("delete product item should call", async () => {
    const PRODUCT_URL_CALL = PRODUCT_CRUD + "/1"
    mockAxios.delete.mockResolvedValueOnce(PRODUCT_MOCKING);
    const result = await remove(PRODUCT_URL_CALL);
    expect(mockAxios.delete).toHaveBeenCalledWith(PRODUCT_URL_CALL);
    expect(result).toEqual(PRODUCT_MOCKING);
  });

  test("should render product grid view component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render (
      <Router location={history.location} navigator={history}>
        <ProductGridView />
      </Router>
    );
    expect(getByTestId("product-gird-view")).toBeInTheDocument();
  });

  test("should open modal when click button 'Add new product'", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render (
      <Router location={history.location} navigator={history}>
        <ProductGridView />
      </Router>
    );
    const btnOpenModal = getByTestId("open-modal");
    fireEvent.click(btnOpenModal);
    expect(btnOpenModal).toBeInTheDocument();
  });

  test("should create product when pass data", () => {
    const history = createMemoryHistory();
    render (
      <Router location={history.location} navigator={history}>
        <ProductGridView />
      </Router>
    );
    const data = PRODUCT_MOCKING;
    expect(data).toBe(PRODUCT_MOCKING);
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
        <ProductGridView />
      </Router>);
    expect(asFragment()).toMatchSnapshot();
  });
})
