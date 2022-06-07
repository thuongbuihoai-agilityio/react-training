import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductDetails from "../ProductDetail";
import { useState } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("ProductDetail component", () => {
  beforeEach(()=>{
    (useState as jest.Mock).mockImplementation(jest.requireActual("react").useState);
  })

  test("should render product detail", () => {
    const { getByTestId } = render(<ProductDetails />);
    expect(getByTestId("product-detail-page")).toBeInTheDocument();
  });

  // test("matches snapshot", () => {
  //   const { asFragment } = render(<ProductDetails />);
  //   expect(asFragment()).toMatchSnapshot();
  // });
})