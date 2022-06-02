import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../Input";

describe("Input component", () => {
  test("should render input component", () => {
    const { getByTestId } = render(<Input />);
    expect(getByTestId("input")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
})