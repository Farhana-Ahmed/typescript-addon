import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPuppy } from "../../../interface";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const PuppyDetails = () => {
  const [puppy, setPuppy] = useState<IPuppy>({} as IPuppy);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { id } = useParams();
  useEffect(() => {
    const getDetails = async () => {
      const individualPuppy = await axios.get(
        `http://localhost:3001/api/puppies/${id}`
      );
      setPuppy(individualPuppy.data[0]);
    };
    getDetails();
  }, [id]);

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id:number) => {
    e.preventDefault();
    setIsEdit(true)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPuppy({ ...puppy, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault()
    await axios.put(
        `http://localhost:3001/api/puppies/${id}`
      );
      setIsEdit(false)
  }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{puppy.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {puppy.breed}
          </Card.Subtitle>
          <p>Edit puppy with id: {puppy.id}</p>
          <Button variant="primary" onClick={e => handleEdit(e, Number(puppy.id))}>
            Edit
          </Button>
          {isEdit && 
         <form onSubmit={e => handleSave(e, Number(puppy.id))}>
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
         <button>Save</button>
       </form>
            }
        </Card.Body>
      </Card>
    </div>
  );
};

export default PuppyDetails;
