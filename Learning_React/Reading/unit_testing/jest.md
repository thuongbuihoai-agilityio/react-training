### JEST
- `Jest` is a delightful JavaScript Testing Framework with a focus on simplicity.
- It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

**Zero config**

*Jest aims to work out of the box, config free, on most JavaScript projects.*

**Sapshots**

*Make tests which keep track of large objects with ease. Snapshots live either alongside your tests, or embedded inline.*

**Isolated**

*Tests are parallelized by running them in their own processes to maximize performance.*

**Great api**

*From it to expect - Jest has the entire toolkit in one place. Well documented, well maintained, well good.*

- Fast and safe
- Code coverage
- Easy mocking
- Great exceptions

### Using Matchers
```
  // toBe
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  // toEqual
  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });
```
### TDD (Test-Driven Development)
- TDD is a development method based on supporting writing tests for small pieces of code (unit tests).
- TDD is a process of writing test code first and then writing logic code.
- TDD's motto: "Red - Green - Refactor"
```
  "Red": create unit test and run it to see how it fails
  "Green": Execute the code logic to complete the test
  "Refactor": improve code, avoid dupplicate (duplicate), improve test architecture so that test results are successful
```
- *Tests are written before the actual code logic is executed*
### BDD (Behaviour-Driven Development)
- BDD in simple words is the opposite of TDD which is to write business logic code first, then write test code.

**Install jest**
```
  pnpm install --save-dev jest
  next: npx jest --init to create jest config file jest.config.js.
```
### Using Matchers
- Jest uses `matchers` to let you test values in different ways
#### Common Matchers
```
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
```
- `toBe` uses `Object.is` to test exact equality. If you want to check the value of an object, use `toEqual` instead:
```
  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });
```
- `toEqual` recursively checks every field of an `object` or `array`.
- You can also test for the opposite of a matcher:
```
  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });
```
### Truthiness
- toBeNull matches only null
- toBeUndefined matches only undefined
- toBeDefined is the opposite of toBeUndefined
- toBeTruthy matches anything that an if statement treats as true
- toBeFalsy matches anything that an if statement treats as false
### Numbers
```
  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
```
- use `toBeCloseTo` instead of `toEqual`, because you don't want a test to depend on a tiny `rounding error`.
```
  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3); // This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });
```
### Strings
- You can check strings against regular expressions with `toMatch`:
```
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });
```
### Arrays and iterables
- You can check if an array or iterable contains a particular item using `toContain`:
```
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });
```
### Exceptions
- If you want to test whether a particular function throws an error when it's called, use `toThrow`.
```
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }

  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });
```