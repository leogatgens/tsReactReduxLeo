
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const TituloPrincipal = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  color: #FF8F00;
  padding: 0.5px;
  margin: 2px 2px 25px 2px;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: white;
  border: none;
  border-radius: 3px;
  width : 250px;
`;

const Flexcontainer = styled.div` 
  display: flex; 
  background : #F0F0DF;
`

const Flexcolumn = styled.div`
  width: 50%;
  margin: 10px;
  padding: 5px;
  line-height: 75px;
  font-size: 30px;
  background :#FFFF;
`




export {
  TituloPrincipal
  ,Button,Input
  ,Flexcontainer  
  ,Flexcolumn
};