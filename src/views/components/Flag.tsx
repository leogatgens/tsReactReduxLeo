import React from 'react'; // we need this to make JSX compile
import { Typography } from '@material-ui/core';

type CardProps = {
  title: string,
  paragraph?: string
}



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
