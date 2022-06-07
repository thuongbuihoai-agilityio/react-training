import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputSearch from "../InputSearch";

describe("InputSearch component", () => {
  test("should render input search component", () => {
    const { getByTestId } = render(<InputSearch />);
    expect(getByTestId("input-search")).toBeInTheDocument();
  });

  test("display product after inputSearch", async () => {
    act(() => {
      render(<InputSearch />);
      const inputElement = screen.getByPlaceholderText(
        /Search item/i
      ) as HTMLInputElement;
      fireEvent.change(inputElement, { target: { value: "Cheese pocket" } });
      expect(inputElement.value).toBe("Cheese pocket");
    });
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<InputSearch />);
    expect(asFragment()).toMatchSnapshot();
  });
});
