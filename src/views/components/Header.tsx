import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';


  function Header() {
  return ( 
    <Fragment>
     <AppBar position="static" >
      <Toolbar>
        <Typography variant="h4" >
          Países del planeta tierra
        </Typography>       
      </Toolbar>
  </AppBar>
  </Fragment>
  );
}
export default Header;