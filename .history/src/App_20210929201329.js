import React, { useState, useEffect } from 'react';
import Home from './Component/Home';
import MainFile from './Component/MainFile';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {

  }, [])

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
