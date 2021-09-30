import React from 'react';
import Home from './Component/Home';
import MainFile from './Component/MainFile';
import Resume from './Component/Resume'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="app">


      <Home />
      <MainFile />
      <div className="animation-area">
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

    </div>
  );
}

export default App;