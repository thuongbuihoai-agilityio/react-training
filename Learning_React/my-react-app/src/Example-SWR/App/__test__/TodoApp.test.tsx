import React from "react"
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
import "@testing-library/jest-dom";
import TodoApp from "../TodoApp";

describe("TodoApp component", () => {
  test("full app rendering/navigating", async () => {
    const history = createMemoryHistory();
    const {getByTestId} = render(
      <Router location={history.location} navigator={history}>
        <TodoApp />
      </Router>,
    )
    const user = userEvent.setup();
    // verify page content for expected route
    // often you"d use a data-testid or role query, but this is also possible
    expect(getByTestId("about-page")).toBeInTheDocument();
    await user.click(getByTestId("about"));
    // check that the content changed to the new page
    expect(screen.getByText(/This is the about page/i)).toBeInTheDocument();
  })
})