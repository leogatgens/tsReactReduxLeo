import React from 'react'; // we need this to make JSX compile
import { Typography } from '@material-ui/core';

type CardProps = {
  title: string,
  paragraph?: string
}

export const Card = ({ title, paragraph }: CardProps) => <aside>
  <h2>{ title }</h2>
  <p>
    { paragraph }
  </p>
</aside>


export function CountryImage({title} : CardProps ) {    
  
  return ( 
  <React.Fragment>
    <img src={ title} alt="logo"  />
    <Typography variant="h6" align="center">
      ¿País?
    </Typography>
    </React.Fragment>
      );
}
