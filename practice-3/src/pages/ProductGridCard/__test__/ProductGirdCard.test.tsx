import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PRODUCT_MOCKING } from "@/constants/product";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import ProductGridCard from "../ProductGridCard";

describe("ViewProductItem component", () => {
  test("should render product grid card component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render (
      <Router location={history.location} navigator={history}>
        <ProductGridCard product={PRODUCT_MOCKING} deleteProduct={() => {}} />
      </Router>
    );
    expect(getByTestId("product-grid-card")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <ProductGridCard product={PRODUCT_MOCKING} deleteProduct={() => {}} />
      </Router>);
    expect(asFragment()).toMatchSnapshot();
  });
})