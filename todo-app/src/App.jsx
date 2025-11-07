import { useState } from "react";
import InputForm from "./InputForm";
import ListTodo from "./ListTodo";

const App = () => {
  const initialValues = [
    {
      id: 1,
      task: "learn",
      description: "learn react in detail",
    },
    {
      id: 2,
      task: "practice",
      description: "practice react concept",
    },
  ];

  const [todoData, setTodoData] = useState(initialValues);

  const addTodo = (input) => {
    const newData = {
      id: new Date().getTime(),
      task: input.task,
      description: input.description,
    };

    // console.log("data", newData);

    setTodoData((prevData) => [...prevData, newData]);
  };

  console.log("todoData", todoData);

  return (
    <>
      <InputForm addTodo={addTodo} />
      <br />
      <ListTodo todo={todoData} />
    </>
  );
};

export default App;
