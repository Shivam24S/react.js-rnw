import ObjectUseState from "./hooks/ObjectUseState";
import UseEffect from "./hooks/UseEffect";
import UseState from "./hooks/UseState";

const App = () => {
  return (
    <>
      <UseState />
      <br />
      <ObjectUseState />
      <br />
      <UseEffect />
    </>
  );
};

export default App;
