import { render } from "@testing-library/react";
import MENU_LIST from "../../../../constants/menu";
import "@testing-library/jest-dom";
import Menu from "../Menu";

describe("Menu component", () => {
  test("should render menu component", () => {
    const { getByTestId } = render(<Menu menuList={MENU_LIST} />);
    expect(getByTestId("menu")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Menu menuList={MENU_LIST} />);
    expect(asFragment()).toMatchSnapshot();
  });
})