### Introducing Error Boundaries
- Error boundaries are React components that catch JavaScript errors `anywhere` in their child component tree, `log` those errors, and `display a fallback` UI instead of the component tree that crashed. Error boundaries catch errors `during` rendering, in lifecycle methods, and in constructors of the whole tree below them.

**Note**

Error boundaries do not catch errors for:

- Event handlers (learn more)
- Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
- Server side rendering
- Errors thrown in the error boundary itself (rather than its children)
- Error boundaries work like a JavaScript catch {} block, but for components. Only class components can be error boundaries.

**Note** that error boundaries only catch errors in the components below them in the tree.
### Where to Place Error Boundaries