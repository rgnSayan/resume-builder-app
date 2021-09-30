import React, { useState, useEffect, Fragment } from 'react';
import Home from './Component/Home';
import MainFile from './Component/MainFile';
import ClipLoader from "react-spinners/ClipLoader";

import './App.css';

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
      {loading ? (
        <Fragment>

        </Fragment>
      ) : (
        <Fragment>
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
        </Fragment>
      )
      }
    </div >
  );
}

export default App;
