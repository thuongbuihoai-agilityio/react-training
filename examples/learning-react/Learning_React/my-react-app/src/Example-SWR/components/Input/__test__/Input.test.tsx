import { fireEvent, render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Input from "../Input"

describe("Input Component", () => {
  test("renders Input component", () => {
    render(<Input addTodo={() => {}} />);
  });

  test("allows user to add new toto to the toto list", async () => {
    const addTodo = jest.fn();
    act(() => {
      render (
        <Input addTodo={addTodo} />
      );
      const inputElement = screen.getByPlaceholderText(/Add new todo/i) as HTMLInputElement;
      fireEvent.change(inputElement, {target: { value: "Writing unit test for Input value" } });
      fireEvent.keyPress(inputElement, { key: "Enter", keyCode: 13 });
      expect(inputElement.value).toBe("");
    });
  });

  let container: any = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("renders with or without a new todo", () => {
    act(() => {
      render(<Input addTodo={() => {}} />, container);
    });
    expect(container.textContent).toBe("");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Input addTodo={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
})
