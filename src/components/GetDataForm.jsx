import React from "react";
import { useState } from "react";

const GetDataForm = () => {
  const [firstName, setFirstName] = useState("");
  const [isInDB, setIsinDB] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(firstName);
    const response = await fetch(
      `http://localhost:8000/user/?first_name=${firstName}`
    );
    console.log(response.status);
    if (response.status == 200) {
      setIsinDB(true);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Search your first name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>
          <p>Search your name</p>
        </button>
      </form>
      {isInDB ? <p>Your are in our database congrats</p> : null}
    </div>
  );
};

export default GetDataForm;
