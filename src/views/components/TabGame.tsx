import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import * as  countryacciones from '../../redux/actions/CountryActions';
import * as  characteracciones from '../../redux/actions/CharacterActions';
import {connect} from 'react-redux'
import {CountryImage} from './Flag'
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction, bindActionCreators } from 'redux';
import { ICountryState } from '../../redux/Interfaces';
const styles =  ({
  Paper : {padding : 20, marginTop : 20, marginBottom : 10 ,  height : 300}
});


// Create the containers interface
interface IProps {
  mapProps: ICountryState;
  countryaccions : any;
  characteraccions : any;
}

class TabPrincipal extends React.Component<IProps> {  

  componentDidMount() {   
    //this.props.dispatch(actions.loadAuthors());     
  }  

  handleChange = (key : number) => (event : any, value : any) => {
    this.setState({
      [key]: value,
    });
  };

  handleSelectedCountry = (event : any) => {    
   
   this.props.countryaccions.CambiarFondo(event);
  }
  handleNext = () => {
    console.log(this);
  //      let index = this.props.mapProps.countryreducer.selectedTabIndex;
  //  this.props.dispatch(actions.nextCountry(index));
  this.props.characteraccions.CambiarFondo('green');
   // this.props.dispatch(actions.fetchPosts());
  }
  render() {    
    
   // const index = this.props.mapProps.countryreducer.indexCountry;
  //  const  flagUrl = this.props.mapProps.countryreducer.countriesToShow[index];
    // const countriesToShow = this.props.mapProps.countryreducer.countriesToShow; 
    // const  actualCountry = countriesToShow[index];

    return (
      <Grid container spacing={8} >
        <Grid item xs={3}>
         <Paper style={styles.Paper} >
         <CountryImage title = {'http://localhost:3000/img/brazil-flag-button-square-xs.png'}></CountryImage>
        
        </Paper>         
        </Grid>
        <Grid item sm>
         <Paper style={styles.Paper} >
            {/* <Options data={countriesToShow} handleSelectedCountry={this.handleSelectedCountry} actualCountry={actualCountry}></Options> */}
            <Button variant="contained" color="primary" style={{float:"right", marginRight: 5}} onClick={this.handleNext} >
              Next
            </Button>
         </Paper>
         
        </Grid>
      
      </Grid>
    );
  }
}

function mapStateToProps(state : any){
  return {
    mapProps : state
  };
}

function mapDispatchToProps(dispatch :ThunkDispatch<any, any, AnyAction>) {
  return {
countryaccions: bindActionCreators(countryacciones, dispatch),
characteraccions : bindActionCreators(characteracciones, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps )(withStyles(styles)(TabPrincipal));
