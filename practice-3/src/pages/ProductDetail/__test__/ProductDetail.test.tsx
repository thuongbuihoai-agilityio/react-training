import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductDetails from "../ProductDetail";
import { useState } from "react";
import mockAxios from "@/__mocks__/axios";
import { PRODUCT_CRUD } from "@/constants/url";
import { PRODUCT_MOCKING } from "@/constants/product";
import { update } from "@/helpers/fetchApi";
import ModalUpdate from "@/components/Modal/ModalUpdate/ModalUpdate";
import { ProductContext } from "@/context/ProductContext";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const productContextMock = {
  setProducts: jest.fn(),
};

describe("ProductDetail component", () => {
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
    const PRODUCT_URL_CALL = PRODUCT_CRUD + "/1";
    mockAxios.put.mockResolvedValueOnce(PRODUCT_MOCKING);
    const result = await update(PRODUCT_URL_CALL, PRODUCT_MOCKING);
    expect(mockAxios.put).toHaveBeenCalledWith(
      PRODUCT_URL_CALL,
      PRODUCT_MOCKING
    );
    expect(result).toEqual(PRODUCT_MOCKING);
  });

  test("should hide modal update when click Cancel", () => {
    const { getByTestId } = render(
      <ModalUpdate
        product={PRODUCT_MOCKING}
        hideModalUpdate={hideModalUpdate}
        deleteImage={() => {}}
        updateProductDetail={() => {}}
      />
    );
    const hideModal = getByTestId("btn-no-modalUpdate");
    fireEvent.click(hideModal);
    expect(hideModalUpdate).toHaveBeenCalled();
  });

  test("should update product when click Submit", () => {
    const { getByTestId } = render(
      <ModalUpdate
        product={PRODUCT_MOCKING}
        hideModalUpdate={updateProduct}
        deleteImage={() => {}}
        updateProductDetail={() => {}}
      />
    );
    const btnSubmit = getByTestId("btn-yes-modalUpdate");
    fireEvent.click(btnSubmit);
    expect(updateProduct).toHaveBeenCalled();
  });

  test("should render product detail", () => {
    const { getByTestId } = render(
      <ProductContext.Provider value={productContextMock}>
        <ProductDetails />
      </ProductContext.Provider>
    );
    expect(getByTestId("product-detail-page")).toBeInTheDocument();
  });

  test("should open modal when click button edit", () => {
    const { getByTestId } = render(
      <ProductContext.Provider value={productContextMock}>
        <ProductDetails />
      </ProductContext.Provider>
    );
    const btnOpenModal = getByTestId("open-modal-update");
    fireEvent.click(btnOpenModal);
    expect(hideModalUpdate).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <ProductContext.Provider value={productContextMock}>
        <ProductDetails />
      </ProductContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
