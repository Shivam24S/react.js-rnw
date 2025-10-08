// import UseState from "./hooks/UseState";

import UseEffect from "./hooks/UseEffect";

// import { useState } from "react";
// import LifeCycle from "./hooks/LifeCycle";
// import ObjectUseState from "./hooks/ObjectUseState";

const App = () => {
  // const [show, setShow] = useState(true);
  return (
    <>
      {/* <UseState /> */}
      {/* <ObjectUseState /> */}

      {/* <button onClick={() => setShow((prev) => !prev)}>
        {show ? "hide" : "show"}{" "}
      </button> */}

      {/* {show && <LifeCycle />} */}

      <UseEffect />
    </>
  );
};

export default App;
