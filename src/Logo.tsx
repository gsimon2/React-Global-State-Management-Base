import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import { useGlobalState } from './Store';

const AppLogo = styled.img<{duration: number}>`
  animation: ${props => `App-logo-spin infinite ${props.duration}s linear`};
`;
 
const Logo = () => {
   const {globalState} = useGlobalState();

   return (
      <>
         <p>{globalState.sliderValue}</p>
         <AppLogo src={logo} className="App-logo" alt="logo" duration={globalState.sliderValue}/>
      </>
   );
}
 
export default Logo;