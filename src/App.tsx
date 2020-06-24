import React from 'react';
import Slider from './Slider';
import Logo from './Logo';
import LoggingComponent from './LoggingComponent';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Global State Management</h1>
        <Logo/>
        <Slider/>
        <LoggingComponent/>
      </header>
    </div>
  );
}

export default App;
