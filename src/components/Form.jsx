import React from "react";
import { useState } from "react";

const InitialForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userAge, setUserAge] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRow = {
      first_name: firstName,
      last_name: lastName,
      age: parseInt(userAge),
    };
    console.log(newRow);
    fetch("http://localhost:8000/user/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRow),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <label>
        Enter your firstname:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Enter your lastname:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>
        <p>Enviar</p>
      </button>
    </form>
  );
};

export default InitialForm;
