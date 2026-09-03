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
      console.log(users)


    }
    getUsers();
  }, []);


  const deleteUser = (idx) => {
    setUsers(users.filter((value, index) => index !== idx));
  };


  const addUser = (newName) => {
    setUsers(
      [...users, { name: newName }]
    )
  }
  addUser("ddd")





  return (
    <div>
      {
        users.map((user, idx) => {
          return (
            <div key={idx}>
              <NameDivs user={user} onDelete={() => deleteUser(idx)} />
            </div>
          )
        })
      }
    </div>
  );
  // będzie trzeba przekazywać parametry w górę, do rodzica
}
