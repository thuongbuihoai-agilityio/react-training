import { fireEvent, render } from "@testing-library/react";
import { PRODUCT_MOCKING } from "@/constants/product";
import ModalUpdate from "../ModalUpdate";
import "@testing-library/jest-dom";
import { useState } from "react";
import mockAxios from "@/__mocks__/axios";
import { CATEGORIES_URL } from "@/constants/url";
import { CATEGORY_MOCKING_LIST } from "@/constants/categories";
import { get } from "@/helpers/fetchApi";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Modal create component", () => {
  const hideModalUpdate = jest.fn();
  beforeEach(()=>{
    (useState as jest.Mock).mockImplementation(jest.requireActual("react").useState);
  })

  afterEach(() => {
    mockAxios.reset();
  });

  test("get categories item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({data: CATEGORY_MOCKING_LIST});
    const result = await get(CATEGORIES_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(CATEGORIES_URL);
    expect(result).toEqual(CATEGORY_MOCKING_LIST);
  });

  test("should render modal update component", () => {
    const { getByTestId } = render(<ModalUpdate product={PRODUCT_MOCKING}
    hideModalUpdate={() => {}} isReload={true} setIsReLoad={() => {}} />);
    expect(getByTestId("modal-update")).toBeInTheDocument();
  });

  test("should hide modal update when click Cancel", () => {
    const { getByTestId } = render(<ModalUpdate product={PRODUCT_MOCKING}
      hideModalUpdate={hideModalUpdate} isReload={true} setIsReLoad={() => {}} />);
    const hideModal = getByTestId("btn-no-modalUpdate");
    fireEvent.click(hideModal);
    expect(hideModalUpdate).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<ModalUpdate product={PRODUCT_MOCKING}
      hideModalUpdate={() => {}} isReload={true} setIsReLoad={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});