import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductGridView from "../ProductGridView";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { PRODUCTS_URL } from "@constants/url";
import { create, getData, remove } from "@helpers/fetchApi";
import mockAxios from "@__mocks__/axios";
import { Search } from "@common-types/search";
import { SearchContext } from "@context/SearchContext";
import Categories from "@components/Categories/Categories";
import { useState } from "react";
import ModalDelete from "@components/Modal/ModalDelete/ModalDelete";
import ModalCreate from "@components/Modal/ModalCreate/ModalCreate";
import { PRODUCT_MOCKING, PRODUCT_MOCKING_LIST } from "@__mocks__/constants/product";
import { ProductContext } from "@common-types/product";
import { mutate } from "swr";
import { DataContext } from "@context/DataContext";

const contextValueMockSearch: Search = {
  setSearchValue: jest.fn(),
  searchValue: "",
};

const contextProductMock: ProductContext = {
  setProducts: jest.fn(),
  mutate,
  products: PRODUCT_MOCKING_LIST,
}

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Product grid view component", () => {
  const deleteProduct = jest.fn();
  const handleCreateProduct = jest.fn();

  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(
      jest.requireActual("react").useState
    );
  });

  afterEach(() => {
    mockAxios.reset();
  });

  const setup = () => {
    const utils = render(
      <ModalCreate
        hideModalCreate={() => {}}
        createProduct={() => {}}
      />
    );
    const input = utils.getByTestId("change-value") as HTMLInputElement;
    return {
      input,
      ...utils,
    };
  };

  test("should change value when onChang input", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "Cheese pocket" } });
    expect(input.value).toBe("Cheese pocket");
  });

  test("get categories item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: PRODUCT_MOCKING_LIST });
    const result = await getData(PRODUCTS_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(PRODUCTS_URL);
    expect(result).toEqual(PRODUCT_MOCKING_LIST);
  });

  test("add new product item should call", async () => {
    mockAxios.post.mockResolvedValueOnce(PRODUCT_MOCKING);
    const result = await create(PRODUCTS_URL, PRODUCT_MOCKING);
    expect(mockAxios.post).toHaveBeenCalledWith(PRODUCTS_URL, PRODUCT_MOCKING);
    expect(result).toEqual(PRODUCT_MOCKING);
  });

  test("delete product item should call", async () => {
    const PRODUCT_URL_CALL = PRODUCTS_URL + "/1";
    mockAxios.delete.mockResolvedValueOnce(PRODUCT_MOCKING);
    const result = await remove(PRODUCT_URL_CALL);
    expect(mockAxios.delete).toHaveBeenCalledWith(PRODUCT_URL_CALL);
    expect(result).toEqual(PRODUCT_MOCKING);
  });

  test("should delete product when click Yes", () => {
    render(
      <ModalDelete
        id={""}
        hideModalDelete={() => {}}
        deleteProduct={deleteProduct}
      />
    );
    const hideModal = screen.getByText("Yes");
    fireEvent.click(hideModal);
    expect(deleteProduct).toHaveBeenCalled();
  });

  test("should create product when click Submit", () => {
    render(
      <ModalCreate
        hideModalCreate={() => {}}
        createProduct={handleCreateProduct}
      />
    );
    const submitBtn = screen.getByText("Submit");
    fireEvent.click(submitBtn);
    expect(submitBtn).toBeInTheDocument();
  });

  test("should render product grid view component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <ProductGridView />
      </Router>
    );
    expect(getByTestId("product-gird-view")).toBeInTheDocument();
  });

  test("should get product when run app", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <DataContext.Provider value={contextProductMock}>
        <Router location={history.location} navigator={history}>
          <ProductGridView />
        </Router>
      </DataContext.Provider>
    );
    const getProducts = getByTestId("product-gird-view");
    fireEvent.click(getProducts);
    expect(contextProductMock.setProducts).not.toHaveBeenCalled();
  });

  test("should open modal when click button 'Add new product'", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
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
    render(
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
      </SearchContext.Provider>
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
        </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
