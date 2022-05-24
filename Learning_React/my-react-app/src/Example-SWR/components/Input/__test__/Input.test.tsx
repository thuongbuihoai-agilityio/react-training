import { render } from "@testing-library/react";
import Input from "../Input"

describe("Input Component", () => {
  test("renders Input component", () => {
    render(<Input addTodo={() => {}} />);
  });
})