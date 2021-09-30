import React, { useState, useEffect, Fragment } from 'react';
import Home from './Component/Home';
import MainFile from './Component/MainFile';
import ClockLoader from "react-spinners/ClockLoader";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './Component/Resume';
import './App.css';
import Login from './Component/Login';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(false);
    }, 8000)
  }, [])

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Fragment>
          <Router>
            <Switch>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/">
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
              </Route>
            </Switch>
          </Router>
        </Fragment>
      )}
    </div >
  );
}

export default App;
