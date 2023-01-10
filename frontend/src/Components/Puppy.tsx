import React from 'react'
import { IPuppy } from '../../../interface'

interface Props {
    puppy: IPuppy
}

const Puppy = ({puppy} : Props) => {
  return (
    <div>
        <h1>{puppy.name}</h1>
        <p>{puppy.breed}</p>
        
        <button >See details</button>
    </div>
  )
}

export default Puppy