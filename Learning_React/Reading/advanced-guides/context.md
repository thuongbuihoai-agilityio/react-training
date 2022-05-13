### Context
- Context provides a way to pass data through the component tree without having to pass props down manually at every level.
#### When to Use Context
- Context is designed to share data that can be considered “global” for a tree of React components
#### Before You Use Context
- Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.
### API
#### React.createContext
```
  const MyContext = React.createContext(defaultValue);
```
- Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
#### Context.Provider
```
  <MyContext.Provider value={/* some value */}>
```
- The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
#### Class.contextType
- The contextType property on a class can be assigned a Context object created by React.createContext(). Using this property lets you consume the nearest current value of that Context type using this.context.
#### Context.Consumer
```
  <MyContext.Consumer>
    {value => /* render something based on the context value */}
  </MyContext.Consumer>
```
- A React component that subscribes to context changes. Using this component lets you subscribe to a context within a function component.
- Requires a function as a `child`.
- The value argument passed to the function will be `equal` to the value prop of the closest Provider for this context above in the tree. If there is no Provider for this context above, the value argument will be equal to the `defaultValue` that was passed to createContext().
#### Context.displayName
- Context object accepts a `displayName` string property. React DevTools uses this string to determine what to display for the context.
```
  const MyContext = React.createContext(/* some value */);
  MyContext.displayName = 'MyDisplayName';

  <MyContext.Provider> // "MyDisplayName.Provider" in DevTools
  <MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools
```