import React, { useState } from "react";

const ObjectUseState = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [person, setPerson] = useState([]);

  const handleChange = (field, e) => {
    setInput((person) => {
      return {
        ...person,
        [field]: e.target.value,
      };
    });
  };

  const handleSaveUser = () => {
    setPerson((person) => [...person, input]);
    setInput({ name: "", age: "", email: "" });
  };

  return (
    <>
      <input
        type="text"
        placeholder="enter your name"
        value={input.name}
        onChange={(e) => {
          handleChange("name", e);
        }}
      />

      <br />

      <input
        type="text"
        placeholder="enter your age"
        value={input.age}
        onChange={(e) => {
          handleChange("age", e);
        }}
      />

      <br />

      <input
        type="text"
        placeholder="enter your email"
        value={input.email}
        onChange={(e) => handleChange("email", e)}
      />
      <br />

      <h1>person name {input.name}</h1>

      <h1>Person age {input.age}</h1>

      <h1>Person email {input.email}</h1>

      <button onClick={handleSaveUser}> save user</button>

      <h1>saved user</h1>

      <table>
        <thead>
          <tr>
            <th>User name</th>
            <th>User age</th>
            <th>User email</th>
          </tr>
        </thead>
        <tbody>
          {person.map((user, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ObjectUseState;
