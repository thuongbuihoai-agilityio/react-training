### Importing
```
  import ReactTestUtils from 'react-dom/test-utils'; // ES6
  var ReactTestUtils = require('react-dom/test-utils'); // ES5 with npm
```
### Overview
- `ReactTestUtils` makes it easy to test React components in the testing framework of your choice

**Note**

We recommend using React Testing Library which is designed to enable and encourage writing tests that use your components as the end users do
### Reference
#### act()
- To prepare a component for assertions, wrap the code rendering it and performing updates inside an act() call. This makes your test run closer to how React works in the browser.
#### mockComponent()
- mockComponent() is a legacy API. We recommend using jest.mock() instead.
#### isElement()
```
  isElement(element)
```
- Returns `true` if `element` is any React element.
#### isElementOfType()
```
  isElementOfType(
    element,
    componentClass
  )
```
- Returns `true` if `element` is a React element whose type is of a React `componentClass`.
#### isDOMComponent()
```
  isDOMComponent(instance)
```
- Returns `true` if `instance` is a DOM component (such as a `<div>` or `<span>`).
#### isCompositeComponent()
```
  isCompositeComponent(instance)
```
- Returns `true` if `instance` is a user-defined component, such as a class or a function.
#### isCompositeComponentWithType()
```
  isCompositeComponentWithType(
    instance,
    componentClass
  )
```
- Returns `true` if `instance` is a component whose type is of a React `componentClass`.
#### renderIntoDocument()
```
  renderIntoDocument(element)
```
- Render a React element into a detached DOM node in the document. This function requires a DOM. It is effectively equivalent to:
```
  const domContainer = document.createElement('div');
  ReactDOM.createRoot(domContainer).render(element);
```