import React from 'react';
import Slider from './Slider';
import Logo from './Logo';
import LoggingComponent from './LoggingComponent';
import {useGlobal} from 'reactn';
import GlobalStateModel from './models/GlobalStateModel';

import './App.css';

function App() {
  const [global, setGlobal] = useGlobal();

  if (!Object.entries(global).length) {
    const initialState: GlobalStateModel = {
      sliderValue: 20
    }

    setGlobal(initialState);
  }

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
