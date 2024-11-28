import { render } from "@testing-library/react"
import TodoDetail from "../TodoDetail"
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import useTodo from "../../../hooks/useTodo";

describe("TodoDetail component", () => {
  test("should render todoDetail component", async () => {
    const history = createMemoryHistory();
    const state = { todo: useTodo() }
    console.log("state", state);
    history.push("/", state);
    const {getByTestId} = render(
      <Router location={history.location} navigator={history}>
        <TodoDetail />
      </Router>
    )
    expect(getByTestId("todoDetail-page")).toBeInTheDocument();
  })

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <TodoDetail />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
})