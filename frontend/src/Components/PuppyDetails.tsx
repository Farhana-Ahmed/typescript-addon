import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IPuppy } from '../../../interface';

const PuppyDetails = () => {
    const[puppy, setPuppy] = useState<IPuppy>({} as IPuppy);
const { id } = useParams();
useEffect(() => 
{
    const getDetails = async() => {
        const individualPuppy = await axios.get(`/api/puppies:${id}`)
        setPuppy(individualPuppy.data)
            }
            getDetails();
}, [id])
    
  return (
    <div>{puppy.name}</div>
  )
}

export default PuppyDetails