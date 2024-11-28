import { act, fireEvent, render, screen } from "@testing-library/react";
import { TODO_CONTENT } from "../../../constants/todo";
import ModalUpdate from "../ModalUpdate";

describe("Button component", () => {
  test("Should render pop when clicking button", async () => {
    const isOpenModalUpdate = jest.fn();
    render (
      <ModalUpdate hideModalUpdate={isOpenModalUpdate}
        todo={TODO_CONTENT}
        isReload={true}
        setIsReLoad={() => {}} 
      />
    );

    // test for event click Submit and Cancel button on pop confirm
    const clickBtnSubmit = screen.getByRole("button", {name: /Submit/i});
    fireEvent.click(clickBtnSubmit);
    expect(isOpenModalUpdate).toHaveBeenCalled();

    const clickBtnCancel = screen.getByRole("button", {name: /Cancel/i});
    fireEvent.click(clickBtnCancel);
    expect(isOpenModalUpdate).toHaveBeenCalled();
  });

  test("allows user to update toto", async () => {
    const loadData = jest.fn();
    act(() => {
      render (
        <ModalUpdate hideModalUpdate={() => {}}
          todo={TODO_CONTENT}
          isReload={true}
          setIsReLoad={loadData}
        />
      );
      const clickBtnSubmit = screen.getByRole("button", {name: /Submit/i});
      const inputElement = screen.getByTestId("update-input") as HTMLInputElement;
      fireEvent.change(inputElement, {target: { value: "Writing unit test for update modal" } });
      fireEvent.click(clickBtnSubmit);
      expect(inputElement.value).toBe("Example create Todo App (20220522)");
    });
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
    <ModalUpdate hideModalUpdate={() => {}}
      todo={TODO_CONTENT}
      isReload={true}
      setIsReLoad={() => {}} 
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});