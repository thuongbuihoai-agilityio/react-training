import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductGridView from "../ProductGridView";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { PRODUCT_MOCKING_LIST } from "@/constants/product";
import { CATEGORY_MOCKING_LIST } from "@/constants/categories";

const useProductsMock = { products: PRODUCT_MOCKING_LIST };
  jest.mock("../../../hooks/useProducts.ts", () => ({
    default: jest.fn(() => useProductsMock),
}));

const useCategoriesMock = { products: CATEGORY_MOCKING_LIST };
  jest.mock("../../../hooks/useCategories.ts", () => ({
    default: jest.fn(() => useCategoriesMock),
}));

describe("ViewProductItem component", () => {
  test("should render ViewProductItem component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render (
      <Router location={history.location} navigator={history}>
        <ProductGridView />
      </Router>
    );
    expect(getByTestId("product-gird-view")).toBeInTheDocument();
  });

  // test("matches snapshot", () => {
  //   const history = createMemoryHistory();
  //   const { asFragment } = render(
  //     <Router location={history.location} navigator={history}>
  //       <ProductGridView />
  //     </Router>);
  //   expect(asFragment()).toMatchSnapshot();
  // });
})