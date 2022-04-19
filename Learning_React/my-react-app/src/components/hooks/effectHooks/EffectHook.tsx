import React, { useEffect, useState } from "react";

export function EffectCallback() {
  // useEffect (callback)
    // 1. Callback is always called after component mounted
    // 2. Call the callback every time the component re-render
  const [title, setTitle] = useState("")
  
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <h2>useEffect (callback)</h2>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </div>
  );
}

export function EffectArray() {
  // userEffect (callback, [])
    // Call the callback only once after the component is mounted
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
      setPosts(posts);
    })
  }, [])
  console.log(posts);
  

  return (
    <div>
      <h2>useEffect (callback, [])</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
    </div>
  );
}
