import React, { useContext, useState } from "react";
import { expense } from "./ExpenseContext";

const ExpenseList = () => {
  const { list, update, deleteData } = useContext(expense);

  const [filter, setFilter] = useState({
    search: "",
    type: "all",
    category: "all",
  });

  const handleChange = (identifier, e) => {
    setFilter((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const filteredList = list
    .filter((l) =>
      l.title.toLowerCase().includes(filter.search.toLocaleLowerCase())
    )
    .filter((l) => (filter.type === "all" ? true : l.type === filter.type))
    .filter((l) =>
      filter.category === "all" ? true : l.category === filter.category
    );

  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={filter.search}
        onChange={(e) => handleChange("search", e)}
      />

      <label htmlFor="type">type</label>
      <select
        name="type"
        value={filter.type}
        onChange={(e) => handleChange("type", e)}
      >
        <option value="all">all</option>
        <option value="credit">credit</option>
        <option value="debit">debit</option>
      </select>

      <label htmlFor="category">category</label>
      <select
        name="category"
        value={filter.category}
        onChange={(e) => handleChange("category", e)}
      >
        <option value="all">all</option>
        <option value="general">general</option>
        <option value="travel">travel</option>
        <option value="food">Food</option>
        <option value="shopping">Shopping</option>
      </select>

      <h1>expense data</h1>
      <table border="1px solid black">
        <thead>
          <tr>
            <th>title</th>
            <th>amount</th>
            <th>type</th>
            <th>category</th>
            <th colSpan={2}>actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.length > 0 ? (
            filteredList.map((l) => (
              <tr key={l.id}>
                <td>{l.title}</td>
                <td>{l.amount}</td>
                <td>{l.type}</td>
                <td>{l.category}</td>
                <td>
                  <button onClick={() => update(l.id)}>edit</button>
                </td>
                <td>
                  <button onClick={() => deleteData(l.id)}>delete</button>
                </td>
              </tr>
            ))
          ) : (
            <p>no data found</p>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
