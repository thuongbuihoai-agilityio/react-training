import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductDetails from "../ProductDetail";
import { useState } from "react";
import { PRODUCTS_URL } from "@constants/url";
import { update } from "@helpers/fetchApi";
import ModalUpdate from "@components/Modal/ModalUpdate/ModalUpdate";
import { PRODUCT_MOCKING } from "@__mocks__/constants/product";
import mockAxios from "@__mocks__/axios";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Product detail component", () => {
  const updateProduct = jest.fn();
  const hideModalUpdate = jest.fn();
  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(
      jest.requireActual("react").useState
    );
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test("update product item should call", async () => {
    const PRODUCT_URL_CALL = PRODUCTS_URL + "/1";
    mockAxios.put.mockResolvedValueOnce(PRODUCT_MOCKING);
    const result = await update(PRODUCT_URL_CALL, PRODUCT_MOCKING);
    expect(mockAxios.put).toHaveBeenCalledWith(
      PRODUCT_URL_CALL,
      PRODUCT_MOCKING
    );
    expect(result).toEqual(PRODUCT_MOCKING);
  });

  test("should hide modal update when click Cancel", () => {
    render(
      <ModalUpdate
        product={PRODUCT_MOCKING}
        hideModalUpdate={hideModalUpdate}
        deleteImage={() => {}}
        updateProductDetail={() => {}}
      />
    );
    const hideModal = screen.getByText("Cancel");
    fireEvent.click(hideModal);
    expect(hideModalUpdate).toHaveBeenCalled();
  });

  test("should update product when click Submit", () => {
    render(
      <ModalUpdate
        product={PRODUCT_MOCKING}
        hideModalUpdate={updateProduct}
        deleteImage={() => {}}
        updateProductDetail={() => {}}
      />
    );
    const btnSubmit = screen.getByText("Submit");
    fireEvent.click(btnSubmit);
    expect(updateProduct).toHaveBeenCalled();
  });

  test("should render product detail", () => {
    const { getByTestId } = render(
        <ProductDetails />
    );
    expect(getByTestId("product-detail-page")).toBeInTheDocument();
  });

  test("should open modal when click button edit", () => {
    const { getByTestId } = render(
      <ProductDetails />
    );
    const btnOpenModal = getByTestId("open-modal-update");
    fireEvent.click(btnOpenModal);
    expect(hideModalUpdate).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <ProductDetails />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
