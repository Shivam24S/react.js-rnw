import React, { useContext, useState } from "react";
import { expense } from "./ExpenseContext";

const ExpenseList = () => {
  const { list, update, deleteData } = useContext(expense);

  
  const [expenseQuery,setExpenseQuery] = useState({
    search:"",
    type:"all",
    category:"all",
    sortedBy:"latest"
  })


  const handleQuery = (identifier,e) =>{

    setExpenseQuery((prev)=>{
      return {
        ...prev,
        [identifier]:e.target.value
      }
    })

  }


  const filterList = list.filter((l)=>(

    l.title.toLowerCase().includes(expenseQuery.search.toLowerCase())

  )).filter((l)=>(

    expenseQuery.type === "all" ? true : l.type === expenseQuery.type

  )).filter((l)=>(
    expenseQuery.category === "all" ?true : l.category === expenseQuery.category
  ))  



  const sortedList = [...filterList].sort((a,b)=>{


    if(expenseQuery.sortedBy === "latest"){

      return a.id - b.id
    }

    if(expenseQuery.sortedBy === "oldest"){

      return  b.id - a.id
    }
    

    if(expenseQuery.sortedBy === "ascending"){

      return  Number(a.amount) - (b.amount)
    }

    if(expenseQuery.sortedBy === "descending"){

      return  Number(b.amount) - (a.amount)
    }


  })

 

  return (
    <>
    
     <input type="text" value={expenseQuery.search} placeholder="search"  onChange={(e)=>handleQuery("search",e)} />

<label htmlFor="type">type</label>
     <select name="type" value={expenseQuery.type} onChange={(e)=>handleQuery("type",e)} >
      <option value="all">all</option>
      <option value="credit">credit</option>
      <option value="debit">debit</option>
     </select>
     
     <label htmlFor="category">category</label>
     <select name="category" value={expenseQuery.category} onChange={(e)=>handleQuery("category",e)} >
     <option value="general">general</option>
          <option value="travel">Travel</option>
          <option value="food">Food</option>
          <option value="shopping">Shopping</option>
     </select>

     <label htmlFor="sortedBy">sortedBy</label>
     <select name="sortedBy" value={expenseQuery.sortedBy} onChange={(e)=>handleQuery("sortedBy",e)} >
      <option value="latest">latest</option>
      <option value="oldest">oldest</option>
      <option value="ascending">Money Ascending</option>
      <option value="descending">Money descending</option>
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
          {sortedList.length > 0 ? (
            sortedList .map((l) => (
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
            <tr><p>no data found</p></tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
