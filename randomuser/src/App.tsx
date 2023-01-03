import React, { useEffect, useState } from 'react';

import './App.css';

interface user {
  map(arg0: (item : any) => JSX.Element): import ('react').ReactNode;
  name: string;
  address : string;
  age: number;
}

function App() {
const [user, setUser] = useState<user | undefined>();

useEffect(() => {
fetch('https://randomuser.me/api/')
.then(response => response.json())
.then((json) => setUser(json.results));
}, [])

const name = user?.map(item => item?.name.first);
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault()

  const value = e.currentTarget.value

  // setUser({ ...user, name: value })
}
  return (
    <div className="App">
      <form>
        <label>Name:</label>
      {/* <input type="text" value={name} onChange={handleChange} /> */}
        <span>{user?.map(item => item?.name.first)}</span>
        <hr></hr>
        <label>Address:</label>
        <span>{user?.map(item => item?.location.street.name)}</span>
        <hr></hr>
        <label>Age:</label>
        <span>{user?.map(item => item?.dob.age)}</span>
        
      </form>
    </div>
  );
}

export default App;
