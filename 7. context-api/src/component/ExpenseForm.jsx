import React, { useState } from "react";

const ExpenseForm = () => {
  const [input, setInput] = useState({
    title: "",
    amount: 0,
    category: "",
    type: "",
  });

  const handleInputData = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          placeholder="enter title"
          value={input.title}
          onChange={handleInputData}
        />
        <br />
        <br />
        <br />
        <label htmlFor="amount">
          amount
          <input
            type="number"
            placeholder="enter amount"
            value={input.amount}
            onChange={handleInputData}
          />
        </label>
        <br />
        <br />
        <br />
        <label htmlFor="type">
          debit
          <input type="radio" />
          credit
          <input type="radio" />
        </label>
        <br />
        <br />
        <br />
        <label htmlFor="category">
          <select name="" id="">
            <option value="">category</option>
            <option value="general">General</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="medical">Medical</option>
          </select>
        </label>

        <br />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;
