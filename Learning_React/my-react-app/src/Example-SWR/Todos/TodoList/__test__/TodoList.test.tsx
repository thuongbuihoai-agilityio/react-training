import { render } from "@testing-library/react"
import TodoList from "../TodoList"
import "@testing-library/jest-dom";

describe("TodoDetail component", () => {
  test("should render todoDetail component", async () => {
    const {getByTestId} = render(
      <TodoList />
    )
    expect(getByTestId("todoList-page")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  });
})