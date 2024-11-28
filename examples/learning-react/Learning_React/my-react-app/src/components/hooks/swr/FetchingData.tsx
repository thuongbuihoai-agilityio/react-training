import useSWR from "swr";
const fetcher = (url: any) => fetch(url).then(res => res.json());

const Profile = () => {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher);
  if(error) return <div>failed to load</div>

  return (
    <div>hello
      {
        data ? (
          data.map((user: any) => {
            return <div> {user.title}</div>
          })
        ) : (
          <div>Loading...</div>
        )
      }
    </div>
  )
}

export default Profile