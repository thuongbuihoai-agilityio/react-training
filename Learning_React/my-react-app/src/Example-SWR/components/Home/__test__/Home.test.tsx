import React from "react";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
import Home from "../Home";

describe("Home component", () => {
  test("rendering/navigating", async () => {
    const history = createMemoryHistory();
    const {getByTestId} = render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    )
    expect(getByTestId("home-page")).toBeInTheDocument();
  })
})
