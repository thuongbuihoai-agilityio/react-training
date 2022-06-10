import { fireEvent, render, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { PRODUCT_MOCKING } from "@/constants/product";
import ModalUpdate from "../ModalUpdate";
import "@testing-library/jest-dom";
import { useState } from "react";
import mockAxios from "@/__mocks__/axios";
import { CATEGORIES_URL, PRODUCT_CRUD } from "@/constants/url";
import { CATEGORY_MOCKING_LIST } from "@/constants/categories";
import { get, update } from "@/helpers/fetchApi";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Modal create component", () => {
  const hideModalUpdate = jest.fn();
  const updateProduct = jest.fn();
  const deleteImages = jest.fn();
  const someValues = [{ name: "cheese pocket" }];
  const setup = () => {
    const utils = render(
      <ModalUpdate
        product={PRODUCT_MOCKING}
        hideModalUpdate={() => {}}
        isReload={true}
        setIsReLoad={() => {}}
        deleteImage={() => {}}
      />
    );
    const input = utils.getByTestId("change-value-name") as HTMLInputElement;
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
        isReload={true}
        setIsReLoad={() => {}}
        deleteImage={() => {}}
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
        isReload={true}
        setIsReLoad={() => {}}
        deleteImage={deleteImages()}
      />
    );
    const deleteImage = getByTestId("delete-image");
    fireEvent.click(deleteImage);
    expect(deleteImages).toHaveBeenCalled();
  });

  test("get categories item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: CATEGORY_MOCKING_LIST });
    const result = await get(CATEGORIES_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(CATEGORIES_URL);
    expect(result).toEqual(CATEGORY_MOCKING_LIST);
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

  test("should render modal update component", () => {
    const { getByTestId } = render(
      <ModalUpdate
        product={PRODUCT_MOCKING}
        hideModalUpdate={() => {}}
        isReload={true}
        setIsReLoad={() => {}} deleteImage={() => {}} />
    );
    expect(getByTestId("modal-update")).toBeInTheDocument();
  });

  test("should hide modal update when click Cancel", () => {
    const { getByTestId } = render(
      <ModalUpdate
        product={PRODUCT_MOCKING}
        hideModalUpdate={hideModalUpdate}
        isReload={true}
        setIsReLoad={() => {}}
        deleteImage={() => {}}
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
        hideModalUpdate={() => {}}
        isReload={true}
        setIsReLoad={updateProduct}
        deleteImage={() => {}}
      />
    );
    const btnSubmit = getByTestId("btn-yes-modalUpdate");
    fireEvent.click(btnSubmit);
    expect(updateProduct).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<ModalUpdate product={PRODUCT_MOCKING}
    hideModalUpdate={() => { } } isReload={true} setIsReLoad={() => { } } deleteImage={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
