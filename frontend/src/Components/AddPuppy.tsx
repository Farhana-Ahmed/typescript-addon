import React, { useState } from 'react'
import { IPuppy } from '../App';

const AddPuppy = (puppy : IPuppy) => {
    const [result, setResult] = useState<Array<IPuppy>>([]);
    fetch('https://swapi.co/api/starships', {
        method: 'POST',
        body: JSON.stringify(puppy)
      })
        .then(response => response.json())
        .then(response => {
          setResult( response );
        })
        
  
  }

export default AddPuppy
