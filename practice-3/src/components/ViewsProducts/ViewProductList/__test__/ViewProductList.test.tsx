import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ViewProductList from "../ViewProductList";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { PRODUCT_MOCKING_LIST } from "@/constants/product";

const useProductsMock = { products: PRODUCT_MOCKING_LIST };
  jest.mock("../../../../hooks/useProducts.ts", () => ({
    default: jest.fn(() => useProductsMock),
}));

describe("ViewProductItem component", () => {
  test("should render ViewProductItem component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render (
      <Router location={history.location} navigator={history}>
        <ViewProductList />
      </Router>
    );
    expect(getByTestId("view-product-list")).toBeInTheDocument();
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