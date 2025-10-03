import Jsx from "./Jsx";
import State from "./State";
import PrevState from "./PrevState";
import Props from "./Props";

function App() {
  return (
    <>
      {/* <h1>hello</h1>;<Jsx /> */}
      {/* <Jsx></Jsx> */}
      <State />
      {/* <PrevState /> */}

      <Props greeting={"good morning"} />
    </>
  );
}

export default App;

// arrow function

// const App = () => {
//   return <h1>hello</h1>;
// };

// export default App;
