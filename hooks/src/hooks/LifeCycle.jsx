import React, { useEffect, useState } from "react";

const LifecycleExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Will Unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Component Updated - count changed:", count);
  }, [count]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default LifecycleExample;
