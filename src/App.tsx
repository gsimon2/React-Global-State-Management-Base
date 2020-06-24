import React from 'react';
import Slider from './Slider';
import Logo from './Logo';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Global State Management</h1>
        <Logo/>
        <Slider/>
      </header>
    </div>
  );
}

export default App;
