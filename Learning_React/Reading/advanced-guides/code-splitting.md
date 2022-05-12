### Code-Splitting
#### Bundling
- Most React apps will have their files `bundled` using tools like `Webpack`, `Rollup` or `Browserify`.
- Bundling is the process of following imported files and merging them into a single file: a `bundle`.
- This bundle can then be included on a webpage to load an entire app at once.
### Code Splitting
- Bundling is great, but as your app grows, your bundle will grow too
- You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.
- `Code-Splitting` is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.