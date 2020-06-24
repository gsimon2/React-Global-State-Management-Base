import React from 'react';
import Slider from './Slider';
import Logo from './Logo';
import LoggingComponent from './LoggingComponent';
import { SliderContextProvider } from './ContextManager';

import './App.css';

function App() {
  const [sliderValue, updateSliderValue] = React.useState(20);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Global State Management - Contexts</h1>
        <SliderContextProvider value={{sliderValue, updateSliderValue}}>
          <Logo/>
          <Slider/>
        </SliderContextProvider>
        <LoggingComponent/>
      </header>
    </div>
  );
}

export default App;
