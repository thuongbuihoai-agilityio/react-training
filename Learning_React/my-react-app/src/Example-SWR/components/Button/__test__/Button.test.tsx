import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  test("Should render pop when clicking button", async () => {
    const onClickButton = jest.fn();
    render (
      <Button onClick={onClickButton} value="Update" />
    );
    const clickBtn = screen.getByRole("button", {name: /Update/i});
    fireEvent.click(clickBtn);
    expect(onClickButton).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Button value="Update" onClick={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});