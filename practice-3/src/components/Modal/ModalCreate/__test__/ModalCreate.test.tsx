import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalCreate from "../ModalCreate";
import { PRODUCT_MOCKING_LIST } from "@/constants/product";
import { CATEGORY_MOCKING_LIST } from "@/constants/categories";
import { useState } from "react";

const useProductsMock = { products: PRODUCT_MOCKING_LIST };
  jest.mock("../../../../hooks/useProducts.ts", () => ({
    default: jest.fn(() => useProductsMock),
}));

const useCategoriesMock = { categories: CATEGORY_MOCKING_LIST };
  jest.mock("../../../../hooks/useCategories.ts", () => ({
    default: jest.fn(() => useCategoriesMock),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Modal create component", () => {
  const hideModalCreate = jest.fn();
  const selectedFile = jest.fn();
  beforeEach(()=>{
    (useState as jest.Mock).mockImplementation(jest.requireActual("react").useState);
  })

  test("should render modal create component", () => {
    const { getByTestId } = render(<ModalCreate hideModalCreate={() => {}} />);
    expect(getByTestId("modal-create")).toBeInTheDocument();
  });

  test("should hide modal create when click Cancel", () => {
    const { getByTestId } = render(<ModalCreate hideModalCreate={hideModalCreate} />);
    const submitBtn = getByTestId("hide-modal-btn");
    fireEvent.click(submitBtn);
    expect(hideModalCreate).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<ModalCreate hideModalCreate={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});