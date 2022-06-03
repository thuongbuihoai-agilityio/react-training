import { fireEvent, render } from "@testing-library/react";
import { PRODUCT_MOCKING } from "@/constants/product";
import ModalUpdate from "../ModalUpdate";
import "@testing-library/jest-dom";
import { useState } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Modal create component", () => {
  const hideModalUpdate = jest.fn();
  const updateProduct = jest.fn();
  beforeEach(()=>{
    (useState as jest.Mock).mockImplementation(jest.requireActual("react").useState);
  })

  test("should render modal delete component", () => {
    const { getByTestId } = render(<ModalUpdate product={PRODUCT_MOCKING}
      hideModalUpdate={() => {}} onChangeProductDetail={() => {}} />);
    expect(getByTestId("modal-update")).toBeInTheDocument();
  });

  test("should hide modal update when click Cancel", () => {
    const { getByTestId } = render(<ModalUpdate product={PRODUCT_MOCKING}
      hideModalUpdate={hideModalUpdate} onChangeProductDetail={() => {}} />);
    const hideModal = getByTestId("btn-no-modalUpdate");
    fireEvent.click(hideModal);
    expect(hideModalUpdate).toHaveBeenCalled();
  });

  test("should update product when click Submit", () => {
    const { getByTestId } = render(<ModalUpdate product={PRODUCT_MOCKING}
      hideModalUpdate={() => {}} onChangeProductDetail={updateProduct} />);
    const hideModal = getByTestId("btn-yes-modalUpdate");
    fireEvent.click(hideModal);
    expect(updateProduct).toHaveBeenCalled();
  });
});