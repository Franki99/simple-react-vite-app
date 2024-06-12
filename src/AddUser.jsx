// src/AddUser.jsx
import { useState } from "react";
import { useAtom } from "jotai";
import { usersAtom } from "./store";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useAtom(usersAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, age };
    setUsers([...users, newUser]);
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
