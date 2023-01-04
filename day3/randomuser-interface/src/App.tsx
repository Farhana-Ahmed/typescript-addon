import React, { useEffect, useState } from 'react';
import './App.css';
import { IUser } from './interface';

function App() {

  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    const getResultsApi = async() => {
      const data = await fetch('https://randomuser.me/api/')
      const res = await data.json();

      const firstUser = res.results[0];

      setUser(prev => {
        return {
          ...prev,
          name: firstUser.name.first,
          age: firstUser.dob.age,
          address: firstUser.location.street.name,
        }
      })
    }
    getResultsApi()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
e.preventDefault();
setUser({...user, name: e.target.value})
  }

  return (
    <div className="App">
      <form>
        <label>Name:</label>
        <input type= 'text' value={user.name} />
        <label>Age:</label>
        <input type= 'text' value={user.age} />
        <label>Address:</label>
        <input type= 'text' value={user.address} />
        <h1>Change the name of {user.name} here</h1>
        <input type= 'text' value={user.name} onChange= {handleChange} />

      </form>
    </div>
  );
}

export default App;
