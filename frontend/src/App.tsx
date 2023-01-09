import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
export interface IPuppy {
  name: string,
  birthdate: string,
  breed: string,
  id: number
}

export interface IProps {
  puppies: Array<IPuppy>;
}

function App() {//props: IProps
const [puppies, setPuppies] = useState<Array<IPuppy>>([]);
  useEffect(() => {
const fetchApi = async() =>{
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
fetchApi()
  }, [])

  return (
    <div className="App">
      <h1>Fun with Puppies</h1>

      {/* {tutorials &&
            tutorials.map((tutorial, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTutorial(tutorial, index)}
                key={index}
              >
                {tutorial.title}
              </li>
            ))} */}
{
  puppies && 
  puppies.map((puppy, index) => (
    <li key={index}>
      {puppy.name}
    </li>
  ))
}
    {/* <p>{puppy.name}</p> */}
   {/* {props.puppies.length > 0 ? 
  props.puppies.map(i => <p>i['name']</p>)  */}
  {/* : null} */}
    </div>
  );
} 

export default App;
