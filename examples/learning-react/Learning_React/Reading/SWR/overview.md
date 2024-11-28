### Installation
```
  // with npm
  npm install swr
  // with yarn
  yarn add swr
```
### Quick Start
- For normal RESTful APIs with JSON data, first you need to create a `fetcher function`, which is just a wrapper of the native fetch:
```
  const fetcher = (...args) => fetch(...args).then(res => res.json())
```
### Make It Reusable
```
  function useUser (id) {
    const { data, error } = useSWR(`/api/user/${id}`, fetcher)

    return {
      user: data,
      isLoading: !error && !data,
      isError: error
    }
  }

  // And use it in your components:
  function Avatar ({ id }) {
    const { user, isLoading, isError } = useUser(id)

    if (isLoading) return <Spinner />
    if (isError) return <Error />
    return <img src={user.avatar} />
  }
```
### Global Configuration
- The context `SWRConfig` can provide global configurations (options) for all SWR hooks.
```
  <SWRConfig value={options}>
    <Component/>
  </SWRConfig>
```
### Extra APIs
#### Cache Provider
- Besides all the options listed, SWRConfig also accepts an optional provider function.
```
  <SWRConfig value={{ provider: () => new Map() }}>
    <Dashboard />
  </SWRConfig>
```
### Access To Global Configurations
- You can use the useSWRConfig hook to get the global configurations, as well as mutate and cache:
```
  import { useSWRConfig } from 'swr'

  function Component () {
    const { refreshInterval, mutate, cache, ...restConfig } = useSWRConfig()

    // ...
  }
```
- Nested configurations will be extended. If no <SWRConfig> is used, it will return the `default ones`.
### Data Fetching
```
  const { data, error } = useSWR(key, fetcher)
```
- This is the very fundamental API of SWR. The `fetcher` here is an async function that `accepts the key` of SWR, and `returns the data`.
### Fetch
- You can use any library to handle data fetching, for example a fetch polyfill developit/unfetch:
```
  import fetch from 'unfetch'

  const fetcher = url => fetch(url).then(r => r.json())

  function App () {
    const { data, error } = useSWR('/api/data', fetcher)
    // ...
  }
```
### Axios
```
  import axios from 'axios'

  const fetcher = url => axios.get(url).then(res => res.data)

  function App () {
    const { data, error } = useSWR('/api/data', fetcher)
    // ...
  }
```
### GraphQL
```
  import { request } from 'graphql-request'

  const fetcher = query => request('/api/graphql', query)

  function App () {
    const { data, error } = useSWR(
      `{
        Movie(title: "Inception") {
          releaseDate
          actors {
            name
          }
        }
      }`,
      fetcher
    )
    // ...
  }
```
### Error Handling
- If an error is thrown inside `fetcher`, it will be returned as error by the hook.
```
  const fetcher = url => fetch(url).then(r => r.json())

  // ...
  const { data, error } = useSWR('/api/user', fetcher)
```
- The `error` object will be defined if the fetch promise is rejected.
### Automatic Revalidation
- When you re-focus a page or switch between tabs, SWR automatically revalidates data.
### Revalidate on Interval
- You can enable it by setting a refreshInterval value:
```
  useSWR('/api/todos', fetcher, { refreshInterval: 1000 })
```
- There're also options such as `refreshWhenHidden` and `refreshWhenOffline`.
### Disable Automatic Revalidations
- Since version 1.0, SWR provides a helper hook `useSWRImmutable` to mark the resource as immutable:
```
  import useSWRImmutable from 'swr/immutable'

  // ...
  useSWRImmutable(key, fetcher, options)
```
### Pagination
- SWR provides a dedicated API useSWRInfinite to support common UI patterns such as pagination and infinite loading.
### When to Use useSWR
##### Pagination
- First of all, we might `NOT` need useSWRInfinite but can use just useSWR if we are building something like this: