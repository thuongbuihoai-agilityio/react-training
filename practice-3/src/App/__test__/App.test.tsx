import { useState } from "react";
import {render, screen} from "@testing-library/react";
import {createMemoryHistory} from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { PRODUCT_MOCKING_LIST } from "@/constants/product";
import { CATEGORY_MOCKING_LIST } from "@/constants/categories";
import App from "../App";

const useProductsMock = { products: PRODUCT_MOCKING_LIST };
  jest.mock("../../hooks/useProducts.ts", () => ({
    default: jest.fn(() => useProductsMock),
}));

const useCategoriesMock = { categories: CATEGORY_MOCKING_LIST };
  jest.mock("../../hooks/useCategories.ts", () => ({
    default: jest.fn(() => useCategoriesMock),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("App component", () => {
  beforeEach(()=>{
    (useState as jest.Mock).mockImplementation(jest.requireActual("react").useState);
  })

  test("rendering a view product list component that uses useLocation", () => {
    const history = createMemoryHistory();
    const route = "/";
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    )
    expect(screen.getByTestId("view-product-list")).toBeInTheDocument();
  })

  test("rendering a product list component that uses useLocation", () => {
    const history = createMemoryHistory();
    const route = "/products";
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    )
    expect(screen.getByTestId("product-list-page")).toBeInTheDocument();
  });

  test("rendering a product detail component that uses useLocation", () => {
    const history = createMemoryHistory();
    const route = "/product/:id";
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    )
    expect(screen.getByTestId("product-detail-page")).toBeInTheDocument();
  })

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
})