import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import { useGlobal } from 'reactn';
import GlobalStateModel from './models/GlobalStateModel';

const AppLogo = styled.img<{duration: number}>`
  animation: ${props => `App-logo-spin infinite ${props.duration}s linear`};
`;
 
const Logo = () => {
   const [global] =  useGlobal<GlobalStateModel>();

   return (
      <>
         <p>{global.sliderValue}</p>
         <AppLogo src={logo} className="App-logo" alt="logo" duration={global.sliderValue}/>
      </>
   );
}
 
export default Logo;