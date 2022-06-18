import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import ProductGridCard from "../ProductGridCard";
import { useState } from "react";
import ModalDelete from "@/components/Modal/ModalDelete/ModalDelete";
import { PRODUCT_MOCKING } from "@/__mocks__/constants/product";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Product grid card component", () => {
  const deleteProduct = jest.fn();
  beforeEach(()=>{
    (useState as jest.Mock).mockImplementation(jest.requireActual("react").useState);
  })

  test("should render product grid card component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render (
      <Router location={history.location} navigator={history}>
        <ProductGridCard product={PRODUCT_MOCKING} deleteProduct={() => {}} />
      </Router>
    );
    expect(getByTestId("product-grid-card")).toBeInTheDocument();
  });

  test("should open modal delete when click button delete", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render (
      <Router location={history.location} navigator={history}>
        <ProductGridCard product={PRODUCT_MOCKING} deleteProduct={() => {}} />
      </Router>
    );
    const btnOpenModal = getByTestId("open-modal-delete");
    fireEvent.click(btnOpenModal);
    expect(btnOpenModal).toBeInTheDocument();
  });

  test("should delete product when click Yes", () => {
    const { getByTestId } = render(
      <ModalDelete
        id={""}
        hideModalDelete={() => {}}
        deleteProduct={deleteProduct}
      />
    );
    const hideModal = getByTestId("btn-yes");
    fireEvent.click(hideModal);
    expect(deleteProduct).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <ProductGridCard product={PRODUCT_MOCKING} deleteProduct={() => {}} />
      </Router>);
    expect(asFragment()).toMatchSnapshot();
  });
})