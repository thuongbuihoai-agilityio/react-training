import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom"
import { TODO_CONSTANTS } from "../../../constants/todo";
import Todo from "../Todo";

describe("Todo item", () => {
  test("render Todo Item component", async () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Todo {...TODO_CONSTANTS} />
      </Router>
    );
    const todoItemElement = getByTestId("todo-item");
    expect(todoItemElement).toBeInTheDocument();
  });

  test("Should render pop when clicking delete button", async () => {
    const deleteTodo = jest.fn();
    const history = createMemoryHistory();
    render (
      <Router location={history.location} navigator={history}>
        <Todo
          {...TODO_CONSTANTS}
          deleteTodo={deleteTodo}
        />
      </Router>
    );
    const deleteBtn = screen.getByRole("button", {name: /Delete/i});
    fireEvent.click(deleteBtn);
    expect(deleteTodo).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <Todo
          {...TODO_CONSTANTS}
          deleteTodo={() => {}}
        />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});