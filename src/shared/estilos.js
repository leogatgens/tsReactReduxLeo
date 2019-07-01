
import styled from "styled-components";



// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: #f0f0df;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// The Button from the last section without the interpolations
// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export {  TomatoButton, Wrapper };
