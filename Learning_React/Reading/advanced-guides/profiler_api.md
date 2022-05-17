### Profiler API
**Note:**
- Profiling adds some additional overhead, so it is disabled in the production build
#### Usage
- A Profiler can be added `anywhere` in a React tree to measure the cost of rendering that part of the tree.
- It requires two props: an `id` (string) and an onRender `callback (function)` which React calls any time a component within the tree `commits` an update.
```
  render(
    <App>
      <Profiler id="Navigation" onRender={callback}>
        <Navigation {...props} />
      </Profiler>
      <Main {...props} />
    </App>
  );

  // Multiple Profiler
  render(
  <App>
    <Profiler id="Navigation" onRender={callback}>
      <Navigation {...props} />
    </Profiler>
    <Profiler id="Main" onRender={callback}>
      <Main {...props} />
    </Profiler>
  </App>

  // Profiler components can also be nested
  render(
  <App>
    <Profiler id="Panel" onRender={callback}>
      <Panel {...props}>
        <Profiler id="Content" onRender={callback}>
          <Content {...props} />
        </Profiler>
        <Profiler id="PreviewPane" onRender={callback}>
          <PreviewPane {...props} />
        </Profiler>
      </Panel>
    </Profiler>
  </App>
);
);
```

**Note**
- Although Profiler is a light-weight component, it should be used only when necessary; each use adds some CPU and memory overhead to an application.

#### onRender Callback
- The `Profiler` requires an `onRender` function as a prop. React calls this function any time a component within the profiled tree “commits” an update.
- It receives parameters describing what was rendered and how long it took.
```
  function onRenderCallback(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) {
    // Aggregate or log render timings...
  }
```