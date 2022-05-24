import React, { useState, useEffect } from "react";

export default function User(props: { id: any; }) {
  const [user, setUser] = useState(null);

  async function fetchUserData(id: string) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users" + id);
    setUser(await response.json());
  }

  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id]);

  if (!user) {
    return "loading...";
  }

  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.email}</strong>
    </details>
  );
}