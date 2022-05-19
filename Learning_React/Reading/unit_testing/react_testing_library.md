### Install
```
  npm install --save-dev @testing-library/react
```
- 
The @testing-library family of packages helps you test UI components in a user-centric way.
### difference between jest and react testing library
- jest: framework for testing, it works with many different platforms, does not depend much on a specific tech stack, the main job is to setup test scripts (define test cases, handle hooks to support tests) case like beforeAll, ...), in the test scenario, there will be input and output, jest will take care of based on my input, is the result I expect the same as the output?
- react-testing-library: library that supports react testing by providing main features like rendering, the main job is to receive input, create output (for example, receive input as Component with props values, generate output as a DOM tree) then give it to jest to handle the next steps, for example compare DOM tree is it the same as the DOM tree I expect in the test case?