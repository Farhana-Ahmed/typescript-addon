import React, { useState } from 'react'
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
        <h1>{puppy.name}</h1>
        <p>{puppy.breed}</p>
        <Link to={`/puppies/${puppy.id}`}>
        <button onClick={handleClick} >See details</button>
        </Link>
        {isClick ? <PuppyDetails /> : null}
       

    </div>
  )
}

export default Puppy