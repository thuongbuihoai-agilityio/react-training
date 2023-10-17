import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button, { ButtonType } from "../index";

describe("Button component", () => {
  test("Should render Button component with type 'default'", async () => {
    const { getByTestId } = render(<Button icon text="" type={ButtonType.default} />);
    const button = getByTestId("button");
    fireEvent.click(button)
    expect(button).toBeInTheDocument();
  });

  test("Should render Button component with type 'disable'", async () => {
    render(<Button icon disable text="" type={ButtonType.default} />);
    const clickBtn = screen.getByRole("button");
    expect(clickBtn).toBeInTheDocument();
  });

  test("Should render Button component with type 'primary'", async () => {
    render(<Button text="SHOW MORE" type={ButtonType.primary} />);

    const clickBtn = screen.getByRole("button", { name: /SHOW MORE/i });
    expect(clickBtn).toBeInTheDocument();
  });

  test("Should render Button component with type 'secondary'", async () => {
    render(<Button text="Add to bag" type={ButtonType.secondary} />);

    const clickBtn = screen.getByRole("button", { name: /Add to bag/i });
    expect(clickBtn).toBeInTheDocument();
  });

  test("Should render Button component with type 'tertiary'", async () => {
    render(<Button text="Add to bag" type={ButtonType.tertiary} />);

    const clickBtn = screen.getByRole("button", { name: /Add to bag/i });
    expect(clickBtn).toBeInTheDocument();
  });

  test("Should render Button component with type 'btnIconPrimary'", async () => {
    render(<Button icon type={ButtonType.btnIconPrimary} />);

    const clickBtn = screen.getByRole("button");
    expect(clickBtn).toBeInTheDocument();
  });

  test("Should render Button component with type 'btnIconSecondary'", async () => {
    render(<Button icon type={ButtonType.btnIconSecondary} />);

    const clickBtn = screen.getByRole("button");
    expect(clickBtn).toBeInTheDocument();
  });

  test("Should render Button component with default value", async () => {
    render(<Button />);

    const clickBtn = screen.getByRole("button");
    expect(clickBtn).toBeInTheDocument();
  });

  test("Should render Button component with action onClick", async () => {
    const onClickButton = jest.fn();
    render(
      <Button
        text="SHOW MORE"
        onClick={onClickButton}
        type={ButtonType.secondary}
      />,
    );

    const clickBtn = screen.getByRole("button", { name: /SHOW MORE/i });
    fireEvent.click(clickBtn);
    expect(onClickButton).toHaveBeenCalled();
  });

  test("Matches snapshot", () => {
    const { container } = render(
      <Button text="SHOW MORE" type={ButtonType.default} />,
    );
    expect(container).toMatchSnapshot();
  });
});
