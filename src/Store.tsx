import React, {createContext, useReducer, useContext} from 'react';

interface globalStateModel {
   sliderValue: number
};

interface globalStateActionModel {
   type: string,
   value?: number
};

interface contextType {
   globalState: globalStateModel
   dispatch: React.Dispatch<globalStateActionModel>
};

const intitialState: globalStateModel = {
   sliderValue: 20
};

const store = createContext<contextType>({
   globalState: intitialState,
   dispatch: () => {}
});

const reducer = (state: globalStateModel, action: globalStateActionModel) => {
   switch(action.type) {
      case 'SET_SLIDER':
         const newState: globalStateModel = Object.assign({}, state, {sliderValue: action.value});
         return newState;
      default:
         throw new Error();
   };
};

const StateProvider = (props: any) => {
   const [state, dispatch] = useReducer(reducer, intitialState);
   return <store.Provider value={{globalState: state, dispatch}}>{props.children}</store.Provider>
};

const useGlobalState = () => useContext(store);

export {useGlobalState, StateProvider};