// import UseState from "./hooks/UseState";

// import { useState } from "react";
import Conditional from "./events/Conditional";
import OnChange from "./events/OnChange";
import OnClick from "./events/OnClick";
import OnSubmit from "./events/OnSubmit";
import PassingArgument from "./events/PassingArgument";
import Controlled from "./forms/Controlled";
import Uncontrolled from "./forms/Uncontrolled";
import WorkingWithForms from "./forms/WorkingWithForms";

import List from "./lists/List";
import ObjectList from "./lists/ObjectList";
import Focus from "./refs/Focus";
import External from "./styling/External";
import InlineCss from "./styling/InlineCss";
import Module from "./styling/Module";

// import UseEffect from "./hooks/UseEffect";

// import { useState } from "react";
// import LifeCycle from "./hooks/LifeCycle";
// import ObjectUseState from "./hooks/ObjectUseState";

const App = () => {
  // const [show, setShow] = useState(true);

  // const [input, setInput] = useState("");
  return (
    <>
      {/* <UseState /> */}
      {/* <ObjectUseState /> */}

      {/* <button onClick={() => setShow((prev) => !prev)}>
        {show ? "hide" : "show"}{" "}
      </button> */}

      {/* {show && <LifeCycle />} */}

      {/* <UseEffect /> */}

      {/* events */}

      {/* <OnClick /> */}

      {/* <OnChange /> */}

      {/* <OnSubmit /> */}

      {/* passing argument in event using props  */}

      {/* <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <PassingArgument name={input} /> */}
      {/* <PassingArgument /> */}

      {/* conditional rendering example */}
      {/* <Conditional /> */}

      {/* lists */}

      {/* <List /> */}

      {/* <ObjectList /> */}

      {/* ref */}

      {/* <Focus /> */}

      {/* forms */}

      {/* <Controlled /> */}

      {/* <Uncontrolled /> */}

      {/* <WorkingWithForms /> */}

      {/* styling in forms */}

      {/* <InlineCss /> */}

      {/* <External /> */}

      <Module />
    </>
  );
};

export default App;
