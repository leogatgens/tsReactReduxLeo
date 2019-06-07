import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import * as countryacciones from "../../../redux/actions/CountryActions";
import * as characteracciones from "../../../redux/actions/CharacterActions";
import { connect } from "react-redux";
import { CountryImage } from "../components/Flag";
import { Options } from "../components/Options";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction, bindActionCreators } from "redux";
import { ICountryState, IPais } from "../../../redux/Interfaces";
import { IAppState } from "../../../redux/Store";

import CircularProgress from "@material-ui/core/CircularProgress";
const styles = {
  Paper: { padding: 20, marginTop: 20, marginBottom: 10, height: 320 }
};

// Create the containers interface
interface IProps {
  mapProps: ICountryState;
  countryaccions: any;
  characteraccions: any;
}

class TabGame extends React.Component<IProps> {
 
  componentDidMount() {
    this.props.countryaccions.getAllCharacters();
  }

  handleChange = (key: number) => (event: any, value: any) => {
    this.setState({
      [key]: value
    });
  };

  handleSelectedCountry = (event: string) => {
    this.props.characteraccions.CambiarFondo(event);
  };
  handleNext = () => {
    let index = this.props.mapProps.selectedTabIndex;
    this.props.countryaccions.nextCountry(
      index,
      this.props.mapProps.listaTodosLosPaises
    );
    this.props.characteraccions.CambiarFondo("white");
  };
 
  isEmpty(value : any){
    return Boolean(value && typeof value == 'object') && !Object.keys(value).length;
  };
  render() {
    let index = this.props.mapProps.indexCountry;
    let countriesToShow = [] as Array<IPais>;
    let actualCountry = {} as IPais;
    
    
    if (this.props.mapProps.paisesMostrandose.length > 0) {
      index = this.props.mapProps.indexCountry;
      countriesToShow = this.props.mapProps.paisesMostrandose;
      actualCountry = countriesToShow[index];    
    } 

    return (
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper style={styles.Paper}>
            {this.isEmpty(actualCountry)  ?
                <Grid
                container
                justify="center"
                direction="column"
                alignContent="center"
              >
                <CircularProgress
                  thickness={4.6}
                  variant="indeterminate"
                  size={60}
                />
              </Grid>:<CountryImage propiedades={actualCountry}/>}
           
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper style={styles.Paper}>
            {countriesToShow.length > 0 ? (
              <Options
                data={countriesToShow}
                handleSelectedCountry={this.handleSelectedCountry}
                actualCountry={actualCountry}
              />
            ) : (
              <Grid
                container
                justify="center"
                direction="column"
                alignContent="center"
              >
                <CircularProgress
                  thickness={4.6}
                  variant="indeterminate"
                  size={60}
                />
              </Grid>
            )}
            <Grid container direction="column-reverse" alignContent="flex-end">
              {countriesToShow.length > 0 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  Next
                </Button>
              ) : null}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state: IAppState) {
  return {
    mapProps: state.PaisState
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, AnyAction>) {
  return {
    countryaccions: bindActionCreators(countryacciones, dispatch),
    characteraccions: bindActionCreators(characteracciones, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TabGame));
