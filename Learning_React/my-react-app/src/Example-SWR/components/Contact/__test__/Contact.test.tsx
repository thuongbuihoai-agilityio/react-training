import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("should render h1 tag", () => {
  render(<Contact />);
  const h1Element = screen.getByText(/This is the contact page/i);
  expect(h1Element).toBeInTheDocument();
});