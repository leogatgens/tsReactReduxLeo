import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, Button } from '@material-ui/core';
import {Link, NavLink} from 'react-router-dom'

class Header extends React.Component {  
  render(){
  return ( 
    <Fragment>
     <AppBar position="static" >
      <Toolbar>
        <Typography variant="h4" >
          Países del planeta tierra
        </Typography>            
        <Button component={Link} to="/">Game</Button>  
        <Button component={Link} to="/about">About</Button>  
        <Button component={Link} to="/contact">contact</Button>        
      </Toolbar>
  </AppBar>
  </Fragment>
  );
  }
}
export default Header;
