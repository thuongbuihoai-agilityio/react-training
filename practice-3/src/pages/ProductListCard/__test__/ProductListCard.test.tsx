import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductListCard from "../ProductListCard";
import { PRODUCT_MOCKING } from "@/constants/product";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("ViewProductItem component", () => {
  test("should render productListCard component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render (
      <Router location={history.location} navigator={history}>
        <ProductListCard product={PRODUCT_MOCKING} />
      </Router>
    );
    expect(getByTestId("product-list-card")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <ProductListCard product={PRODUCT_MOCKING} />
      </Router>);
    expect(asFragment()).toMatchSnapshot();
  });
})