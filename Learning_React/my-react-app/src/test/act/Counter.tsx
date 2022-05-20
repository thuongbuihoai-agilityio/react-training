import { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCounter] = useState(0)
  // const componentDidMount = () => {
  //   document.title = `You clicked ${count} times`;
  // }
  // const componentDidUpdate = () => {
  //   document.title = `You clicked ${count} times`;
  // }
  const handleClick = () => {
    setCounter(count + 1)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default Counter