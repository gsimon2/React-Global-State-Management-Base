import React from 'react';
import Slider from './Slider';
import Logo from './Logo';
import LoggingComponent from './LoggingComponent';
import { StateProvider } from './Store';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Global State Management - Context with Reducers</h1>
        <StateProvider>
          <Logo/>
          <Slider/>
          <LoggingComponent/>
        </StateProvider>
      </header>
    </div>
  );
}

export default App;
