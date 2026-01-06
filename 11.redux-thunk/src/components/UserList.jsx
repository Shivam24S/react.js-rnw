import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, fetchUser } from "../features/user/userThunk";

const UserList = () => {
  const [userInput, setUserInput] = useState("");

  const { users, loading, error } = useSelector((state) => state.usersList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name: userInput }));

    setUserInput("");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">add</button>
      </form>

      {users.map((u) => (
        <ul>
          <li key={u.id}>{u.name}</li>
          <li>
            <button onClick={() => dispatch(deleteUser(u.id))}>delete</button>
          </li>
        </ul>
      ))}
    </>
  );
};

export default UserList;
