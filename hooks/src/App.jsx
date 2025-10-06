import { useState } from "react";
import LifecycleExample from "./hooks/LifeCycle";
import ObjectUseState from "./hooks/ObjectUseState";
import UseEffect from "./hooks/UseEffect";
import UseState from "./hooks/UseState";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {/* <UseState />
      <br />
      <ObjectUseState />
      <br />
      <UseEffect /> */}
      <br />
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "hide" : "show"}component
      </button>
      {show && <LifecycleExample />}
    </>
  );
};

export default App;
