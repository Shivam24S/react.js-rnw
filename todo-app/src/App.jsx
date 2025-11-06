import { useState } from "react";
import InputForm from "./InputForm";

const App = () => {
  const [todoData, setTodoData] = useState([]);

  const addTodo = (input) => {
    const newData = {
      id: Date.now(),
      task: input.task,
      description: input.description,
    };

    // console.log("data", newData);

    setTodoData((prevData) => [...prevData, newData]);
  };

  console.log("todoData", todoData);

  return <InputForm addTodo={addTodo} />;
};

export default App;
