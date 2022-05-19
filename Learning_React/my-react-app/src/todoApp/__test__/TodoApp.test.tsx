import { render, screen } from '@testing-library/react';
import { TodoApp } from '../TodoApp';

test("Should render title Todo App", () => {
  render(<TodoApp />);
  const h3Element = screen.getByText(/Todo App/i);
  expect(h3Element).toBe(h3Element);
})