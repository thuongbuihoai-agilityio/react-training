### API
#### Parameters
- `getKey`: a function that accepts the `index` and the `previous page data`, returns the `key` of a page
- `fetcher`: same as useSWR fetcher function
- `options`: accepts all the options that useSWR supports, with 4 extra options:
  - `initialSize` = 1: number of pages should be loaded initially
  - `revalidateAll` = false: always try to revalidate all pages
  - `revalidateFirstPage` = true: always try to revalidate the first page
  - `persistSize` = false: don't reset the page size to 1 (or initialSize if set) when the first page's key changes
### Return Values
- `data`: an array of fetch response values of each page
- `error`: same as useSWR's error
- `isValidating`: same as useSWR's isValidating
- `mutate`: same as useSWR's bound mutate function but manipulates the data array
- `size`: the number of pages that will be fetched and returned
- `setSize`: set the number of pages that need to be fetched