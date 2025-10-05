import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [user, setUser] = useState([]);

  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        if (!data || data.length === 0) {
          setUser([]);
        } else {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
        setUser([]);
      }
    };

    if (fetchData === true) {
      fetchUserData();
    }
  }, [fetchData]);

  const handleFetchData = () => {
    setFetchData(true);
  };

  return (
    <>
      <button onClick={handleFetchData}>Fetch user data</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>user name</th>
            <th>email</th>
            <th>phone</th>
            <th>company</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.company?.name}</td>
                <td>
                  {user.address?.city}, {user.address?.street}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UseEffect;
