import React from 'react';
import Home from './Component/Home';
import MainFile from './Component/MainFile';
import Resume from './Component/Resume'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sample from './Sample';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* <Router>
        <Switch>
          <Route path="/cv">
            <Resume />
          </Route>
          <Route path="/">
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
          </Route>
        </Switch>
      </Router> */}
      <Sample />
    </div>
  );
}

export default App;
