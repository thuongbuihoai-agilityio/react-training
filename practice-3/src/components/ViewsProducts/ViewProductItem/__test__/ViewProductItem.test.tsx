import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ViewProductItem from "../ViewProductsItem";
import { PRODUCT_MOCKING } from "@/constants/product";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("ViewProductItem component", () => {
  test("should render ViewProductItem component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render (
      <Router location={history.location} navigator={history}>
        <ViewProductItem product={PRODUCT_MOCKING} deleteProduct={() => {}} />
      </Router>
    );
    expect(getByTestId("productViewPage")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <ViewProductItem product={PRODUCT_MOCKING} deleteProduct={() => {}} />
      </Router>);
    expect(asFragment()).toMatchSnapshot();
  });
})