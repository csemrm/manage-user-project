import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const [usersList, setUsersList] = useState([]);
  const onAddUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { username: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      {usersList && <UsersList users={usersList} />}
    </Fragment>
  );
}

export default App;
