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