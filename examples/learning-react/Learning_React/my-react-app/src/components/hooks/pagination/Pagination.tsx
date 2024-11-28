import { useState } from "react";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then(res => res.json());
const Pagination: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { data } = useSWR(`https://jsonplaceholder.typicode.com/users?page=${pageIndex}`, fetcher);
  return <div>
    {data? data.map((item: any) => <div key={item.id}>{item.name}</div>):<></>}
    <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
    <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
  </div>
}
export default Pagination;