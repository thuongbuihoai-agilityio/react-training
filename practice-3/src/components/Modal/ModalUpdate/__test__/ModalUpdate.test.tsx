import { fireEvent, render, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import ModalUpdate from "../ModalUpdate";
import "@testing-library/jest-dom";
import { useState } from "react";
import mockAxios from "@/__mocks__/axios";
import { CATEGORIES_URL, PRODUCTS_URL } from "@/constants/url";
import { CATEGORY_MOCKING_LIST } from "@/__mocks__/constants/categories";
import { getData, update } from "@/helpers/fetchApi";
import { PRODUCT_MOCKING } from "@/__mocks__/constants/product";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Modal update component", () => {
  const hideModalUpdate = jest.fn();
  const updateProductDetail = jest.fn();
  const deleteImages = jest.fn();
  const someValues = [{ name: "cheese pocket" }];
  const setup = () => {
    const utils = render(
      <ModalUpdate
        product={PRODUCT_MOCKING}
        hideModalUpdate={() => {}}
        deleteImage={() => {}}
        updateProductDetail={() => {}}
      />
    );
    const input = utils.getByTestId("change-value") as HTMLInputElement;
    return {
      input,
      ...utils,
    };
  };

  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(
      jest.requireActual("react").useState
    );
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test("should change value when onChang input", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "Cheese pocket" } });
    expect(input.value).toBe("Cheese pocket");
  });

  test("should change file image when onChang input", async () => {
    const { getByTestId, queryByTestId } = render(
      <ModalUpdate
        product={PRODUCT_MOCKING}
        hideModalUpdate={() => {}}
        deleteImage={() => {}}
        updateProductDetail={() => {}}
      />
    );
    const str = JSON.stringify(someValues);
    const blob = new Blob([str]);
    const file = new File([blob], "db.json", {
      type: "application/JSON",
    });
    File.prototype.text = jest.fn().mockResolvedValueOnce(str);
    const input = getByTestId("change-file");
    user.upload(input, file);
    await waitFor(() =>
      expect(queryByTestId("after-change-file")).toBeTruthy()
    );
  });

  test("should delete image when click image", () => {
    const { getByTestId } = render(
      <ModalUpdate
        product={PRODUCT_MOCKING}
        hideModalUpdate={() => {}}
        deleteImage={deleteImages()}
        updateProductDetail={() => {}}
      />
    );
    const deleteImage = getByTestId("delete-image");
    fireEvent.click(deleteImage);
    expect(deleteImages).toHaveBeenCalled();
  });

  test("get categories item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: CATEGORY_MOCKING_LIST });
    const result = await getData(CATEGORIES_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(CATEGORIES_URL);
    expect(result).toEqual(CATEGORY_MOCKING_LIST);
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

  test("should render modal update component", () => {
    const { getByTestId } = render(
      <ModalUpdate
        product={PRODUCT_MOCKING}
        hideModalUpdate={() => {}}
        deleteImage={() => {}}
        updateProductDetail={() => {}}
      />
    );
    expect(getByTestId("modal-update")).toBeInTheDocument();
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
        hideModalUpdate={updateProductDetail}
        deleteImage={() => {}}
        updateProductDetail={() => {}}
      />
    );
    const btnSubmit = getByTestId("btn-yes-modalUpdate");
    fireEvent.click(btnSubmit);
    expect(updateProductDetail).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <ModalUpdate
        product={PRODUCT_MOCKING}
        hideModalUpdate={() => {}}
        deleteImage={() => {}}
        updateProductDetail={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
