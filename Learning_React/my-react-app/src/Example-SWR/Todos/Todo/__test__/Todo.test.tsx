import { act, fireEvent, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom"
import { TODO_CONSTANTS } from "../../../../constants/todo";
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
    const testingClassName = `pop-confirm-${Math.random}`;
    const { getByTestId } = render(
      <Todo
        {...TODO_CONSTANTS}
        deleteTodo={deleteTodo}
      />
    );

    const deleteBtn = getByTestId("delete-btn");
    act(() => {
      fireEvent.click(deleteBtn);
    });
    const popConfirmElm = document.getElementsByClassName(testingClassName)[0];
    expect(popConfirmElm).toBeInTheDocument();
  });
});