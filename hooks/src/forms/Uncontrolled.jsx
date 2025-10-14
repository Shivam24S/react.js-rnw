import React, { useRef } from "react";

const Uncontrolled = () => {
  const taskRef = useRef("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(taskRef.current.value);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="task" ref={taskRef} />
        <button type="submit"> submit</button>
      </form>
    </>
  );
};

export default Uncontrolled;
