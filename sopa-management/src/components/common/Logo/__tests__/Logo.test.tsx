import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { IMAGE } from "../../../../constants/image";
import Logo from "..";

describe("Logo component", () => {
  test("should render logo component", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Logo url={IMAGE.blackLogo} />
      </Router>
    );
    expect(getByTestId("logo")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <Logo url={IMAGE.whiteLogo} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
