import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { IPuppy } from "../../../interface";
import "./AddPuppy.css";
const AddPuppy = () => {
  const [puppy, setPuppy] = useState<IPuppy>({} as IPuppy);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.target.value) {
      <Alert variant="failure">Please enter value</Alert>;
    }
    setPuppy({ ...puppy, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/api/puppies", puppy);
  };
  return (
    <div>
      <header className="App-header">
        <h1>Welcome to Puppy World 🐕</h1>
        <form className="puppy__addform" onSubmit={handleSubmit}>
          <input
            className="text-input"
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={handleChange}
            value={puppy.name}
          />
          <input
            className="text-input"
            type="text"
            name="breed"
            placeholder="Enter breed name"
            onChange={handleChange}
            value={puppy.breed}
          />
          <input
            className="text-input"
            type="text"
            name="birthdate"
            placeholder="Enter date of birth "
            onChange={handleChange}
            value={puppy.birthdate}
          />
          <button className="puppy__addbutton">Add Puppy</button>
        </form>
      </header>
    </div>
  );
};

export default AddPuppy;
