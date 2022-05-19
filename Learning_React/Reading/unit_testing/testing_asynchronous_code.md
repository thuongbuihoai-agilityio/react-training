### Promises
- Return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will fail.
```
  test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });
```
### Async/Await
-  you can use `async` and `await` in your tests. To write an async test, use the `async` keyword in front of the function passed to `test`.
```
  test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });

  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchData();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
```
- You can combine `async` and `await` with `.resolves` or `.rejects`.
```
  test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
  });

  test('the fetch fails with an error', async () => {
    await expect(fetchData()).rejects.toMatch('error');
  });
```
### Callbacks
- If you don't use promises, you can use callbacks
- Instead of putting the test in a function with an empty argument, use a single argument called `done`. Jest will wait until the `done` callback is called before finishing the test.
```
  test('the data is peanut butter', done => {
    function callback(error, data) {
      if (error) {
        done(error);
        return;
      }
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchData(callback);
  });
```
### .resolves / .rejects
- You can also use the `.resolves` matcher in your expect statement, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.
```
  test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
  });
```
- If you expect a promise to be rejected, use the `.rejects` matcher. It works analogically to the `.resolves` matcher. If the promise is fulfilled, the test will automatically fail
```
  test('the fetch fails with an error', () => {
    return expect(fetchData()).rejects.toMatch('error');
  });
```