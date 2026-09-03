import { useEffect, useState } from "react";
import NameDivs from "./components/names";

export default function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const users = await response.json();
      setUsers(users);
//
      users.forEach((user) => {
        console.log(user.name);
      });

    }

    getUsers();
  }, []);

  return (
    <div>
      {
       users.map((user, idx) => {
        return (
          <div key={idx}>
            <NameDivs name={user.name} />
          </div>
        )
       }) 
      }
    </div>
  );
}
