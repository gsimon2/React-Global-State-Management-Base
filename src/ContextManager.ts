import React, {useContext, createContext} from 'react';

interface ISliderState {
   sliderValue: number;
   updateSliderValue: (newValue: number) => void;
};

const sliderContext = createContext({
      sliderValue: 0,
      updateSliderValue: () => {}
   } as ISliderState);

const SliderContextProvider: React.Provider<ISliderState> = sliderContext.Provider;
const useSliderContext = () => useContext(sliderContext);

export {
   SliderContextProvider,
   useSliderContext
};
