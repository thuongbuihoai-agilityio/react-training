import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import ModalCreate from "../ModalCreate";
import { useState } from "react";
import mockAxios from "@/__mocks__/axios";
import { CATEGORY_MOCKING_LIST } from "@/constants/categories";
import { CATEGORIES_URL } from "@/constants/url";
import { get } from "@/helpers/fetchApi";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Modal create component", () => {
  const hideModalCreate = jest.fn();
  const createProduct = jest.fn();
  const someValues = [{ name: "cheese pocket" }];
  const setup = () => {
    const utils = render(
      <ModalCreate hideModalCreate={() => {}} createProduct={() => {}} />
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
      <ModalCreate hideModalCreate={() => {}} createProduct={() => {}} />
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

  test("get categories item should call", async () => {
    mockAxios.get.mockResolvedValueOnce({ data: CATEGORY_MOCKING_LIST });
    const result = await get(CATEGORIES_URL);
    expect(mockAxios.get).toHaveBeenCalledWith(CATEGORIES_URL);
    expect(result).toEqual(CATEGORY_MOCKING_LIST);
  });

  test("should render modal create component", () => {
    const { getByTestId } = render(
      <ModalCreate hideModalCreate={() => {}} createProduct={() => {}} />
    );
    expect(getByTestId("modal-create")).toBeInTheDocument();
  });

  test("should hide modal create when click Cancel", () => {
    const { getByTestId } = render(
      <ModalCreate hideModalCreate={hideModalCreate} createProduct={() => {}} />
    );
    const cancelBtn = getByTestId("hide-modal-btn");
    fireEvent.click(cancelBtn);
    expect(hideModalCreate).toHaveBeenCalled();
  });

  test("should create product when click Submit", () => {
    const { getByTestId } = render(
      <ModalCreate hideModalCreate={() => {}} createProduct={createProduct} />
    );
    const hideModal = getByTestId("create-btn");
    fireEvent.click(hideModal);
    expect(hideModalCreate).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <ModalCreate hideModalCreate={() => {}} createProduct={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
