import { useAtom } from "jotai";
import { usersAtom } from "./store";

const UserList = () => {
  const [users] = useAtom(usersAtom);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
