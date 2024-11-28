### Optimizing Performance
#### Use the Production Build
Create React App:
```
  pnpm run build // This will create a production build of your app in the build/ folder of your project.
```
#### Single-File Builds
- We offer production-ready versions of React and React DOM as single files:
```
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```
### Brunch
- For the most efficient Brunch production build, install the terser-brunch plugin:
```
  # If you use npm
  npm install --save-dev terser-brunch

  # If you use Yarn
  yarn add --dev terser-brunch
```
- Then, to create a production build, add the -p flag to the build command:
```
  brunch build -p
```
### Browserify
- For the most efficient Browserify production build, install a few plugins:
```
  # If you use npm
  npm install --save-dev envify terser uglifyify

  # If you use Yarn
  yarn add --dev envify terser uglifyify
```
- For example:
```
browserify ./index.js \
  -g [ envify --NODE_ENV production ] \
  -g uglifyify \
  | terser --compress --mangle > ./bundle.js
```
### Rollup
- For the most efficient Rollup production build, install a few plugins:
```
  # If you use npm
  npm install --save-dev rollup-plugin-commonjs rollup-plugin-replace rollup-plugin-terser

  # If you use Yarn
  yarn add --dev rollup-plugin-commonjs rollup-plugin-replace rollup-plugin-terser
```

To create a production build, make sure that you add these plugins (the order matters):

- The replace plugin ensures the right build environment is set.
- The commonjs plugin provides support for CommonJS in Rollup.
- The terser plugin compresses and mangles the final bundle.