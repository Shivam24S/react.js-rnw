import React, { useEffect, useState } from "react";
import styles from "./inputForm.module.css";

const InputForm = ({ addTodo, editVal }) => {
  const [input, setInput] = useState({
    task: "",
    description: "",
    completed: false,
  });

  useEffect(() => {
    editVal ? setInput(editVal) : null;
  }, [editVal]);

  const handleInputData = (identifier, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);

    setInput({ task: "", description: "", completed: false });
  };

  return (
    <>
      <form className={styles.formCard} onSubmit={handleSubmit}>
        <div className={styles.heading}>
          <h3>Add New Task</h3>
        </div>
        <div className={styles.task}>
          <label className={styles.label} htmlFor="task">
            Task Title
          </label>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Enter Task Title"
            value={input.task}
            onChange={(e) => handleInputData("task", e)}
          />
        </div>

        <div className={styles.description}>
          <label className={styles.label} htmlFor="description">
            Task description
          </label>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Enter Task Description"
            value={input.description}
            onChange={(e) => handleInputData("description", e)}
          />
        </div>

        <button className={styles.btn} type="submit">
          {editVal ? "update" : "Add Task"}
        </button>
      </form>
    </>
  );
};

export default InputForm;
