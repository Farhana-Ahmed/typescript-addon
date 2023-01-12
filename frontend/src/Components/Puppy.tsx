import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IPuppy } from '../../../interface'
import PuppyDetails from './PuppyDetails'

interface Props {
    puppy: IPuppy
}

const Puppy = ({puppy} : Props) => {
    const[isClick, setIsClick] = useState<boolean>(false);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
setIsClick(true)
    }
        
  return (
    <div>
        <Card style={{ width: "18rem", margin: "10px", height: "20rem"}} >
        <Card.Body>
          <Card.Title style={{textAlign:"center"}}>{puppy.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {/* {puppy.breed} */}
          </Card.Subtitle>
          <Link to={`/puppies/${puppy.id}`}>
        <button onClick={handleClick} >See details</button>
        </Link>
        {isClick ? <PuppyDetails /> : null}
          </Card.Body>
        </Card>
        {/* <h1>{puppy.name}</h1>
        <p>{puppy.breed}</p> */}
        
       

    </div>
  )
}

export default Puppy