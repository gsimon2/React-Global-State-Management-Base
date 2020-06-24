import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const AppLogo = styled.img<{duration: number}>`
  animation: ${props => `App-logo-spin infinite ${props.duration}s linear`};
`;
 
const Logo = () => {

   return (
      <AppLogo src={logo} className="App-logo" alt="logo" duration={20}/>
   );
}
 
export default Logo;