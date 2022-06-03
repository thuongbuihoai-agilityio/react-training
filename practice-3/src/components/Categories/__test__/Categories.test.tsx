import { fireEvent, render } from "@testing-library/react";
import { FilterContext } from "@/context/FilterContext";
import Categories from "../Categories";
import "@testing-library/jest-dom";
import { useState } from "react";
import { CATEGORY_MOCKING_LIST } from "@/constants/categories";

const contextValueMock: any = {
  setFilterInput: jest.fn()
};

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const useCategoriesMock = { categories: CATEGORY_MOCKING_LIST };
  jest.mock("../../../hooks/useCategories.ts", () => ({
    default: jest.fn(() => useCategoriesMock),
}));

describe("Category component", () => {
  beforeEach(()=>{
    (useState as jest.Mock).mockImplementation(jest.requireActual("react").useState);
  })

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