import React, {useEffect, useState } from 'react';
import './App.css';
import AddPuppy from './Components/AddPuppy';
export interface IPuppy {
  name: string,
  birthdate: string,
  breed: string,
  id: number
}

export interface IProps {
  puppies: Array<IPuppy>;
}

const defaultPuppies: IPuppy[] = [];

function App() {//props: IProps
const [puppies, setPuppies] = useState<Array<IPuppy>>([]);
const[name , setName] = useState('')
const [posts, setPosts]: [IPuppy[], (posts: IPuppy[]) => void] = React.useState(defaultPuppies);
  useEffect(() => {
const getAllPuppies = async() =>{
const results = await fetch('http://localhost:3001/api/puppies/')
const data = await results.json()
setPuppies(data)
// setPuppies(prev => {
//   return {
//     ...prev,
//     name: data[0].name,
    
//   }
// })
}
getAllPuppies()
  }, [])

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
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>,puppy : IPuppy ) => {
e.preventDefault();
AddPuppy(puppy)
  }

  return (
    <div className="App">
      <h1>Fun with Puppies</h1>
         
{
  puppies && 
  puppies.map((puppy, index) => (
    <li key={index}>
      {puppy.name}
    </li>
  ))
}

{/* <button onClick={handleClick}>Add</button> */}
  
    </div>
  );
} 

export default App;
