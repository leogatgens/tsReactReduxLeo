import React from 'react'; // we need this to make JSX compile
import { Typography } from '@material-ui/core';
import { IPais } from '../../../redux/Interfaces';


interface IProps {
  propiedades: IPais; 

}

export const CountryImage: React.SFC<IProps> = (props) => { 
  
  return (     
  <React.Fragment>
    <img src={props.propiedades.flagUrl ? props.propiedades.flagUrl : "http://localhost:3000/img/notfound.png"} alt="logo"  />
    <Typography variant="h6" align="center">
      ¿País?
    </Typography>
    </React.Fragment>
      );
}
