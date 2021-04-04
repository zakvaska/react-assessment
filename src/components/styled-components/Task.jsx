import styled, { keyframes } from 'styled-components';

export const Task = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
`;
export const Content = styled.div`
  text-align: justify;
`;
export const StyledList = styled.ol`
  text-align: justify;
  
  li {
    line-height: 2;
  }
`;
export const Heading = styled.h1`
  color: #216298;
`;
export const DesignList = styled.div`
  display: flex;
  flex-direction: column;  

  > div {
    display: flex;
    flex-direction: column;    
  }

  img {
    width: 80%;
    margin: 0 auto;
  }
`;

export const ButtonList = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'}; 
  align-items: center;

  & > button :not(:last-of-type) {
    margin-right: ${(props) => props.marginRight || '0'};
  }

  & > button {
    min-width: ${(props) => props.minWidth || '7rem'};
  } 
`;

export const StyledButton = styled.button`
  color: #24619a;
  background: #e8f4ff;
  border: 1px solid transparent;  
  padding: 0.7rem 1rem;
  border-radius: 0.3rem;
  margin-top: ${(props) => props.marginTop || '2rem'};
  cursor: pointer;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;

  &:hover:not(:disabled) {
    background: white;
    border: 1px solid #24619a;
  }

  &:disabled {
    color: #24619a73;
    cursor: default;
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;  
`;

export const ModalDialog = styled.div`
  background-color: white;
  border: 1px solid #d10720;
  width: 35rem;  
  border-radius: .75rem;
  margin: ${(props) => props.marginY || '10rem'} auto;
  padding: 1.5rem;   
  color: ${(props) => props.inputColor || 'black'}; 
  text-align: ${(props) => props.textAlign || 'start'};
  font-family: sans-serif;
  font-size: 1.1rem;
  cursor: default;
`;

export const ModalHeader = styled.div`
  display: flex;    
  border-bottom: 1px solid #e1e1e1;

  > div {
    padding-left: .5rem;
    font-weight: bold;
    color: black;
    font-family: sans-serif;
  }
`;

export const ModalBody = styled.div`
  font-family: sans-serif;
  font-size: 1rem;
  padding-top: 1rem;
`;

export const ModalFooter = styled.div`
  padding-top: 1rem;
`;

export const StyledSelect = styled.select`
  display: block;
  width: 100%;
  height: 7rem;
  margin-top: ${(props) => props.marginTop || '3rem'};
  margin-bottom: ${(props) => props.marginBottom || '1rem'};
  padding: .5rem;    
  font-size: 1rem;
  color: #3970a3;
  border-color: #9d9d9d;
  
  & > option {
    font-weight: bold;
  }
`;

export const TextInput = styled.input`
  display: block;
  margin-top: ${(props) => props.marginTop || '1rem'};
  padding-left: .5rem;
  border: 1px solid #f3f3f3;
  line-height: 1.5rem;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
`;

export const SpinnerWrapper = styled.div`
  display: flex;
`;

const rotate = keyframes`
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: ${(props) => props.size || '3rem'};
  height: ${(props) => props.size || '3rem'};  
  margin: ${(props) => props.marginY || '1rem'} auto;
  vertical-align: text-bottom;
  border: 0.5em solid #23619a;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;
`;

export const CenteredLabel = styled.div`
  text-align: center;
`;
