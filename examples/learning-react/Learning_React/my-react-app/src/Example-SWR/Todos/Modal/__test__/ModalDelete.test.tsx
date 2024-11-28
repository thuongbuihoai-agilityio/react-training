import { fireEvent, render, screen } from "@testing-library/react";
import ModalDelete from "../ModalDelete";

describe("Button component", () => {
  test("Should render pop when clicking button", async () => {
    const isOpenModalDelete = jest.fn();
    render (
      <ModalDelete id={""} hideModalDelete={isOpenModalDelete} />
    );

    // test for event click Yes and No button on pop confirm
    const clickBtnYes = screen.getByRole("button", {name: /Yes/i});
    fireEvent.click(clickBtnYes);
    expect(isOpenModalDelete).toHaveBeenCalled();

    const clickBtnNo = screen.getByRole("button", {name: /No/i});
    fireEvent.click(clickBtnNo);
    expect(isOpenModalDelete).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<ModalDelete id="1" hideModalDelete={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});