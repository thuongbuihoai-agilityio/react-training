import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

describe("Button component", () => {
  test("should render header component", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("header")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});