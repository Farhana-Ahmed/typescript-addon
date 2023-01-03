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


  return (
    <div className="App">
      <form>
        <label>Name:</label>
        <span>{user?.map(item => item?.name.first)}</span>
        
      </form>
    </div>
  );
}

export default App;
