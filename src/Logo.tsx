import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import { useSliderContext } from './ContextManager';

const AppLogo = styled.img<{duration: number}>`
  animation: ${props => `App-logo-spin infinite ${props.duration}s linear`};
`;
 
const Logo = () => {
   const {sliderValue} = useSliderContext();

   return (
      <>
         <p>{sliderValue}</p>
         <AppLogo src={logo} className="App-logo" alt="logo" duration={sliderValue}/>
      </>
   );
}
 
export default Logo;