import { render, screen } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom"

test("should render h1 tag", () => {
  render(<About />);
  const h1Element = screen.getByText(/This is the about page/i);
  expect(h1Element).toBeInTheDocument();
});