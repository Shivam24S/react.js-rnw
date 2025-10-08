import { useEffect, useState } from "react";

const UseEffect = () => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        if (!data || data.length === 0) {
          return console.log("no data found");
        }

        setPerson(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>Username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {person.map((person) => {
            return (
              <>
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.username}</td>
                  <td>{person.email}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UseEffect;
