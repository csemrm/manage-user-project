import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import userCSS from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");

  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  /*
  const [user, setNewUser] = useState({
    username: "",
    age: "",
  });
  const inputChangeHandler = (input, value) => {
    setNewUser((prev) => {
      return {
        ...prev,
        [input]: value,
      };
    });
  };*/

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername + enteredAge);

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please enter a valid aname and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age!",
        message: "Please enter a valid age > 0.",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };
  const errorHandler = () => {
    setError();
    setEnteredAge("");
    setEnteredUsername("");
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={userCSS.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Add User</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            min="0"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
