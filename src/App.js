import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SpinWheel from './components/SpinWheel';

function App() {
  return (
    <div className="App">
      <Router>
        <SpinWheel />
      </Router>
    </div>
  );
}

export default App;
