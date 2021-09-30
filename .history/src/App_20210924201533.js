import React from 'react';
import Home from './Component/Home';
import MainFile from './Component/MainFile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

        </Switch>
      </Router>
      <Home />
      <MainFile />
      <div class="animation-area">
        <ul class="box-area">
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
