import axios from "axios";
import React, { useState } from "react";
import { IPuppy } from "../../../interface";
interface AddPuppyProps {
  addPuppy: (newPuppy: IPuppy) => void;
}
const AddPuppy = ({ addPuppy }: AddPuppyProps) => {
  const initialValue: IPuppy = {
    name: "",
    id: 0,
    breed: "",
    birthdate: "",
  };
  const [puppy, setPuppy] = useState<IPuppy>({} as IPuppy);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPuppy({ ...puppy, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/api/puppies", puppy);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
          value={puppy.name}
        />
        <input
          type="text"
          name="breed"
          placeholder="Enter breed name"
          onChange={handleChange}
          value={puppy.breed}
        />
        <input
          type="text"
          name="birthdate"
          placeholder="Enter date of birth "
          onChange={handleChange}
          value={puppy.birthdate}
        />
        <button>Add Puppy</button>
      </form>
    </div>
  );
};

export default AddPuppy;
