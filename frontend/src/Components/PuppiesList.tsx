import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { IPuppy } from '../../../interface';
import Puppy from './Puppy';
import './PuppiesList.css';

const PuppiesList = () => {
    const [puppies, setPuppies] = useState<Array<IPuppy>>([]);

  useEffect(() => {
    const getAllPuppies = async () => {
      const results = await fetch("http://localhost:3001/api/puppies/");
      const data = await results.json();
      setPuppies(data);
    };
    getAllPuppies();
  }, []);
  return (
    <div className='puppylist__container'>
        {puppies &&
        puppies.map((puppy: IPuppy, index) => (
          <Puppy puppy={puppy} key={index} />
        ))} 
    </div>
  )
}

export default PuppiesList