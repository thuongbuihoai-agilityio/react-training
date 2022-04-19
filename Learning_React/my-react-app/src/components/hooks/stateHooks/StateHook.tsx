import React, { useState } from "react";

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleIncrease}>
        Click me
      </button>
    </div>
  );
}