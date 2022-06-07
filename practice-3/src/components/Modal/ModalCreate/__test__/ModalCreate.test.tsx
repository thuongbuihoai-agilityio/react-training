import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
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
  const createProduct = jest.fn();
  const hideModalCreate = jest.fn();
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

  test("should render modal create component", () => {
    const { getByTestId } = render(<ModalCreate hideModalCreate={() => {}} createProduct={() => {}} />);
    expect(getByTestId("modal-create")).toBeInTheDocument();
  });

  test("should hide modal create when click Cancel", () => {
    const { getByTestId } = render(<ModalCreate hideModalCreate={hideModalCreate} createProduct={() => {}} />);
    const submitBtn = getByTestId("hide-modal-btn");
    fireEvent.click(submitBtn);
    expect(hideModalCreate).toHaveBeenCalled();
  });

  test("should create product when click Submit", () => {
    const { getByTestId } = render(<ModalCreate hideModalCreate={() => {}} createProduct={createProduct} />);
    const submitBtn = getByTestId("submit-btn");
    fireEvent.click(submitBtn);
    expect(hideModalCreate).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<ModalCreate hideModalCreate={() => {}} createProduct={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});