import { createContext, useState } from "react";

export const expense = createContext({
  add: () => {},
  list: () => {},
  update: () => {},
  delete: () => {},
});

const ExpenseContext = () => {
  const initialState = [
    {
      id: 1,
      title: "burger",
      amount: "500",
      category: "food",
      type: "debit",
    },
  ];

  const [data, setData] = useState(initialState);
};

export default ExpenseContext;
