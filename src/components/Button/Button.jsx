import React from 'react';
import { StyledButton } from '../styled-components/Task';

const Button = ( props, { onClick }) => (
//   <button type="button" onClick={onClick}>
//     No
//   </button>
  <StyledButton type="button" onClick={onClick}>
    {props.Children}
  </StyledButton>
);

export default Button;
