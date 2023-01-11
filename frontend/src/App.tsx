import React from "react";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import PuppiesList from "./Components/PuppiesList";
import Home from "./Components/Home";
import PuppyDetails from "./Components/PuppyDetails";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        {/* <div>
          <nav>
            <Link to="/">Fun with puppies</Link>
          </nav> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/puppies" element={<PuppiesList />} />
            <Route path="/puppies/:id" element={<PuppyDetails />} />
          </Routes>
        {/* </div> */}
      {/* </BrowserRouter> */}
     </div> 
  );  
}

export default App;
