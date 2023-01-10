import React from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import PuppiesList from "./Components/PuppiesList";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/api/puppies">Fun with puppies</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
