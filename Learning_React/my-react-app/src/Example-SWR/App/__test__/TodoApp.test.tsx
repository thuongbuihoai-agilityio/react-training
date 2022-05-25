import React from "react"
import {render, screen} from "@testing-library/react";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
import "@testing-library/jest-dom";
import TodoApp from "../TodoApp";

describe("TodoApp component", () => {
  test("rendering a component that uses useLocation", () => {
    const history = createMemoryHistory();
    const route = "/about";
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <TodoApp />
      </Router>
    )

    expect(screen.getByTestId("about-page")).toHaveTextContent(/This is the about page/i);
  })
});

describe("TodoApp component", () => {
  test("rendering a component that uses useLocation", () => {
    const history = createMemoryHistory();
    const route = "/contact";
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <TodoApp />
      </Router>
    )

    expect(screen.getByTestId("contact-page")).toHaveTextContent(/This is the contact page/i);
  })
});

describe("TodoApp component", () => {
  test("rendering a component that uses useLocation", () => {
    const history = createMemoryHistory();
    const route = "/";
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <TodoApp />
      </Router>
    )

    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  })
})