import React from 'react';
import Home from './Component/Home';
import MainFile from './Component/MainFile';
import { PDFViewer } from '@react-pdf/renderer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Resume from './Component/Resume';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
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
            <PDFViewer>
              <Resume />
            </PDFViewer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
