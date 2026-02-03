import { useCallback, useState } from "react";
import Search from "./Search";

interface userInterface {
  name: string;
  age: number;
}

const dataUser = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Jane",
    age: 25,
  },
];

function BelajarUseCallback() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<userInterface[]>(dataUser);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleAddUser = () => {
    setUsers([...users, { name: "John", age: 30 }]);
  };

  const shuffleUser = (arr: userInterface[]) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  // useCallback digunakan untuk men-cache sebuah function yang digunakan/diprops ke component lain,
  // dan mencegah render ulang ketika function tersebut digunakan pada parent component
  const handleSearchUser = useCallback(
    (text: string) => {
      let filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase()),
      );

      if (text === "") {
        filteredUsers = dataUser;
      }

      setUsers(filteredUsers);
    },
    [users],
  );

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <div>
        <Search onSearch={handleSearchUser} />
        <p>Users:</p>
        {users.map((user, index) => (
          <p key={index}>
            {user.name} - {user.age}
          </p>
        ))}
        <button onClick={handleAddUser}>Add User</button>
        <button onClick={() => setUsers(shuffleUser(users))}>Shuffle</button>
      </div>
    </>
  );
}

export default BelajarUseCallback;
