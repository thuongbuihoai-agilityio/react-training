### Higher-Order Components
- A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API
- Concretely, a higher-order component is a function that takes a component and returns a new component.
- Whereas a component transforms props into UI, a higher-order component transforms a component into another component.
#### Use HOCs For Cross-Cutting Concerns
- Note that a HOC `doesn’t modify` the input component, nor does it use `inheritance` to copy its behavior. Rather, a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with `zero side-effects`.
#### Don’t Mutate the Original Component. Use Composition.
- Mutating HOCs are a leaky abstraction—the consumer must know how they are implemented in order to avoid conflicts with other HOCs.
- Instead of mutation, HOCs should use composition, by wrapping the input component in a container component:
```
  function logProps(WrappedComponent) {
    return class extends React.Component {
      componentDidUpdate(prevProps) {
        console.log('Current props: ', this.props);
        console.log('Previous props: ', prevProps);
      }
      render() {
        // Wraps the input component in a container, without mutating it. Good!
        return <WrappedComponent {...this.props} />;
      }
    }
  }
```
#### Convention: Maximizing Composability
- Not all HOCs look the same. Sometimes they accept only a single argument, the wrapped component:
```
  const NavbarWithRouter = withRouter(Navbar);
```
#### Convention: Wrap the Display Name for Easy Debugging
```
  function withSubscription(WrappedComponent) {
    class WithSubscription extends React.Component {/* ... */}
    WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
    return WithSubscription;
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }
```
### Caveats
- Higher-order components come with a few caveats that aren’t immediately obvious if you’re new to React.
#### Don’t Use HOCs Inside the render Method
-  Using HOC inside render method  cannot preserve the identity of HOCs across render and this invariably affects the overall app performance.
#### Refs are not passed through:
- Since they’re not really props.  Refs are handled specially in React like key. If we add a ref to an element whose component is the result of a HOC, the ref refers to an instance of the outermost container component, not the wrapped component. To solve this problem, use the React.forwardRef API