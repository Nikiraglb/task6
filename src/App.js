import React from 'react';
import "./style.css";
import Games from "./Games";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Articles from './Articles';

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
            <Route path="/" element={< Home/>}></Route>
            <Route path="/Articles" element={<Articles/>}></Route>
            <Route path="/Games" element={<Games/>}></Route>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
