import React, { Component } from 'react';
import styled from 'styled-components';


const Box = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid chocolate;
  border-radius: 10px;
`;


// Create a Title component that'll render an <h1> tag with some styles
const TitleBCCR = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: #F0F0DF;
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

// The Button from the last section without the interpolations
// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// This could be react-router-dom's Link for example
const Link = ({ className, children }) => (
    <a className={className}>
      {children}
    </a>
  );
  
  const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
  `;
  
  const Thing = styled.button`
  color: blue;

  ::before {
    content: '🚀';
  }

  :hover {
    color: red;
  }
`



class PruebaEstilos extends Component {
  render() {
    return (
        <div>
              <Box />
            <Wrapper>
                <TitleBCCR>
                Hello World!
                </TitleBCCR>
            </Wrapper>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
            <TomatoButton>Tomato Button</TomatoButton>
            <div>
    <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>
   </div>
   <Thing>Hello world!</Thing>
  </div>
    
      
    );
  }
}




export { PruebaEstilos,TomatoButton,Wrapper};