import React, { useState, useEffect } from 'react';
import Home from './Component/Home';
import MainFile from './Component/MainFile';
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
      {loading ? (): (
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
      )}
    </div>
  );
}

export default App;
