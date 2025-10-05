import { useState } from "react";

const UseState = () => {
  const [name, setName] = useState("");

  const [count, setCount] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIncrease = () => {
    setCount((count) => count + 1);
  };

  const handleDecrease = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <input type="text" value={name} onChange={handleNameChange} />
      <br />
      <h1>{name}</h1>

      <br />
      <br />
      <h1>{count}</h1>

      <br />
      <br />
      <button onClick={handleIncrease}>increase</button>

      <br />
      <br />
      <button onClick={handleDecrease}>decrease</button>

      <br />
    </>
  );
};

export default UseState;
