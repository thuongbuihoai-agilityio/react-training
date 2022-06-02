import { fireEvent, render } from "@testing-library/react";
import { FilterContext } from "@/context/FilterContext";
import Categories from "../Categories";
import "@testing-library/jest-dom";

const contextValueMock: any = {
  setFilterInput: jest.fn()
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Category component", () => {
  const setIsVisible = jest.fn();
  const useStateMock: any = (isVisible: "") => [isVisible, setIsVisible];

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation(init => [init, setIsVisible])
  });

  test("render category component", () => {
    const { getByTestId } = render(<Categories />);
    const categories = getByTestId("categories");
    expect(categories).toBeInTheDocument();
  });

  test("should filter when click category", () => {
    const { getByTestId } = render(
      <FilterContext.Provider value={contextValueMock}>
        <Categories />
      </FilterContext.Provider>,
    );
    const categoryItem = getByTestId("category-item");
    fireEvent.click(categoryItem);
    expect(contextValueMock.setFilterInput).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <Categories />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});