import React from 'react'; // we need this to make JSX compile
import { Typography } from '@material-ui/core';
import { IPais } from '../../../redux/InterfaceModels';
import { GLOBALS } from '../../../globals/globals-variables';


interface IProps {
  propiedades: IPais; 

}

export const CountryImage: React.SFC<IProps> = (props) => { 
  console.log(props);
  
  return (     
  <React.Fragment>    
    <img src={props.propiedades.flagUrl ? props.propiedades.flagUrl.replace("##CDN##",GLOBALS.rootImages) : `${GLOBALS.rootImages}/notfound.png`} alt="logo"  />
    <Typography variant="h6" align="center">
      ¿País?
    </Typography>
    </React.Fragment>
      );
}
