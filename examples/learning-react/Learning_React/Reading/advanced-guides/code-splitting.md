### Code-Splitting
#### Bundling
- Most React apps will have their files `bundled` using tools like `Webpack`, `Rollup` or `Browserify`.
- Bundling is the process of following imported files and merging them into a single file: a `bundle`.
- This bundle can then be included on a webpage to load an entire app at once.
### Code Splitting
- Bundling is great, but as your app grows, your bundle will grow too
- You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.
- `Code-Splitting` is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.
- `Code-splitting` your app can help you `lazy-load` just the things that are currently needed by the user
#### import()
- The best way to introduce code-splitting into your app is through the dynamic import() syntax.
```
  // Before:
  import { add } from './math';
  console.log(add(16, 26));

  // After:
  import("./math").then(math => {
    console.log(math.add(16, 26));
  });
```
##### React.lazy
- The React.lazy function lets you render a `dynamic import` as a regular component.
```
  // Before:
  import OtherComponent from './OtherComponent';
  // After:
  const OtherComponent = React.lazy(() => import('./OtherComponent'));
```
- This will automatically load the bundle containing when this component is `first rendered.`
- React.lazy takes a function that `must call a dynamic import()`.
- This must `return` a `Promise` which resolves to a module with a `default export` containing a React component.
- The lazy component should then be `rendered inside a Suspense` component
```
  import React, { Suspense } from 'react';

  const OtherComponent = React.lazy(() => import('./OtherComponent'));

  function MyComponent() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
      </div>
    );
  }
```
- The `fallback` prop accepts any React elements that you want to render while waiting for the component to load.
- You can place the Suspense component `anywhere` above the lazy component. You can even wrap multiple lazy components with a single `Suspense` component.
```
  import React, { Suspense } from 'react';

  const OtherComponent = React.lazy(() => import('./OtherComponent'));
  const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

  function MyComponent() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <OtherComponent />
            <AnotherComponent />
          </section>
        </Suspense>
      </div>
    );
  }
```
##### Avoiding fallbacks
- Any component may suspend as a result of rendering, even components that were already shown to the user.
- In order for screen content to always be consistent, if an already shown component suspends, React has to hide its tree up to the closest `<Suspense>` boundary.
##### Route-based code splitting
- A good place to start is with routes. Most people on the web are used to page transitions taking some amount of time to load
- Here’s an example of how to setup route-based code splitting into your app using libraries like React Router with `React.lazy`.
```
  import React, { Suspense, lazy } from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

  const Home = lazy(() => import('./routes/Home'));
  const About = lazy(() => import('./routes/About'));

  const App = () => (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
```
##### Named Exports
- `React.lazy` currently only supports `default exports`
- If the module you want to import uses named exports, you can create an intermediate module that reexports it as the default.