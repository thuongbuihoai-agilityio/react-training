import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputSearch from "../InputSearch";
import { Action, SearchState } from "@/types/search";
import { searchReducer } from "@/reducer/searchReducer";

describe("InputSearch component", () => {
  test("should render input search component", () => {
    const { getByTestId } = render(<InputSearch />);
    expect(getByTestId("input-search")).toBeInTheDocument();
  });

  test("should return new state when dispatch action", () => {
    const initialState: SearchState = {
      searchValue: "",
    }
    const updateAction = {
      action: Action.SetSearchValue,
      payload: "cheese pocket"
    }
    const updatedState = searchReducer(initialState, updateAction);
    expect(updatedState).toEqual(updatedState);
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
