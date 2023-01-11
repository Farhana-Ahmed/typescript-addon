import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPuppy } from "../../../interface";
import Card from "react-bootstrap/Card";
import { Alert, Button } from "react-bootstrap";

const PuppyDetails = () => {
  const [puppy, setPuppy] = useState<IPuppy>({} as IPuppy);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isVisisble, setIsVisible] = useState<boolean>(false);
 
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

  const handleEdit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsEdit(true);   
}

const handleDelete = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    await axios.delete(
        `http://localhost:3001/api/puppies/${id}`
      );
      setIsDelete(true)
}

useEffect(() => {
    if(isDelete) {
        const interval = setInterval(() => {
            setIsVisible(!isVisisble);
            setIsDelete(false)
        }, 1500)
        return () => clearInterval(interval)
    }
}, [isDelete, isVisisble]) 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPuppy({ ...puppy, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await axios.put(
        `http://localhost:3001/api/puppies/${id}`, puppy
      );
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
          <Button variant="primary" onClick={e => handleEdit(e)}>
            Edit
          </Button>
          <Button variant="primary" onClick={e => handleDelete(e)}>
            Delete
          </Button>
          {isDelete ? <Alert variant="success">Deleted successfully</Alert> : null}
          {isEdit && 
         <form onSubmit={e => handleSave(e)}>
            <img src={puppy.image}/>
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
