### Setup/Teardown
- A common way to do it is to use a pair of `beforeEach` and `afterEach` blocks so that they’ll always run and isolate the effects of a test to itself:
```
  import { unmountComponentAtNode } from "react-dom";

  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
```
### Data Fetching
- Note: you may still want to run a subset of tests using an `“end-to-end”` framework that tells whether the whole app is working together.
### Events
- We recommend dispatching real DOM events on DOM elements, and then asserting on the result. Consider a Toggle component:
### Timers
- Your code might use timer-based functions like setTimeout to schedule more work in the future.
### Snapshot Testing
- Frameworks like Jest also let you save “snapshots” of data with toMatchSnapshot / toMatchInlineSnapshot.
```
  import React from "react";
  import { render, unmountComponentAtNode } from "react-dom";
  import { act } from "react-dom/test-utils";
  import pretty from "pretty";

  import Hello from "./hello";

  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should render a greeting", () => {
    act(() => {
      render(<Hello />, container);
    });

    expect(
      pretty(container.innerHTML)
    ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */

    act(() => {
      render(<Hello name="Jenny" />, container);
    });

    expect(
      pretty(container.innerHTML)
    ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */

    act(() => {
      render(<Hello name="Margaret" />, container);
    });

    expect(
      pretty(container.innerHTML)
    ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */
  });
```
### Multiple Renderers
- You may be running snapshot tests on a component with react-test-renderer, that internally uses render from react-dom inside a child component to render some content.
```
  import { act as domAct } from "react-dom/test-utils";
  import { act as testAct, create } from "react-test-renderer";
  // ...
  let root;
  domAct(() => {
    testAct(() => {
      root = create(<App />);
    });
  });
  expect(root).toMatchSnapshot();
```