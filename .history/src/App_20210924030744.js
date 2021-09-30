import React from 'react';
import Home from './Component/Home'
import './App.css';
import MainFile from './Component/MainFile';

function App() {
  return (
    <div className="app">
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
