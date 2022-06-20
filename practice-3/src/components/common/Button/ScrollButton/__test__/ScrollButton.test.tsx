import { fireEvent, render } from "@testing-library/react";
import ScrollButton from "../ScrollButton";

describe("ScrollButton component", () => {
  const spyScrollTo = jest.fn();
  beforeEach(() => {
    Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });
    Object.defineProperty(global.window, "scrollY", { value: 1 });
    spyScrollTo.mockClear();
  });

  test("calls window.scrollTo", () => {
    const { getByTestId } = render(
      <ScrollButton
        text={<i className="fa fa-arrow-alt-circle-up"></i>}
        onClick={() => {}}
      />
    );
    const clickBtn = getByTestId("back-to-top");
    fireEvent.click(clickBtn);
    expect(spyScrollTo).toHaveBeenCalled();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <ScrollButton
        text={<i className="fa fa-arrow-alt-circle-up"></i>}
        onClick={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
