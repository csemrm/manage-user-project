import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([
  ]);
  const onAddUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { username: uName, age: uAge, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />

      {usersList && <UsersList users={usersList} />}
    </div>
  );
}

export default App;
