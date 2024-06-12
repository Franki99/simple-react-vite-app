import AddUser from "./AddUser";
import UserList from "./UserList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>User Management</h1>
      <AddUser />
      <UserList />
    </div>
  );
};

export default App;
