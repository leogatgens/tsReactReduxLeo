import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import * as countryacciones from "../../../redux/actions/GameActions";
import * as characteracciones from "../../../redux/actions/InterfazActions";
import { connect } from "react-redux";
import { CountryImage } from "../components/Flag";
import { Options } from "../components/Options";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction, bindActionCreators } from "redux";
import { IPais } from "../../../redux/InterfaceModels";
import {
  IAppState,
  ICountryState,
  IApiState
} from "../../../redux/interfaceStates";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  Paper: { padding: 20, marginTop: 20, marginBottom: 10 }
};

// Create the containers interface
interface IProps {
  gameProps: ICountryState;
  apiProps: IApiState;
  countryaccions: any;
  characteraccions: any;
}

class TabGame extends React.Component<IProps> {
  componentDidMount() {
    if (this.props.gameProps.listaTodosLosPaises.length <= 0) {
      this.props.countryaccions.getAllCountries().catch((error: any) => {
        console.log(error);
      });
    }
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
    let index = this.props.gameProps.selectedTabIndex;
    this.props.countryaccions.nextCountry(
      index,
      this.props.gameProps.listaTodosLosPaises,
      this.props.gameProps.continents
    );
    this.props.characteraccions.CambiarFondo("white");
  };

  render() {
    console.log("....redering Tab Game");
    let index = this.props.gameProps.indexCountry;
    let countriesToShow = [] as Array<IPais>;
    let actualCountry = {} as IPais;

    if (this.props.gameProps.paisesMostrandose.length > 0) {
      index = this.props.gameProps.indexCountry;
      countriesToShow = this.props.gameProps.paisesMostrandose;
      actualCountry = countriesToShow[index];
    }

    return (
      <Grid>
        <Grid item>
          <Paper style={styles.Paper}>
            {this.props.apiProps.apiCallsInProgress === 0 ? (
              <CountryImage propiedades={actualCountry} />
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
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={styles.Paper}>
            {this.props.apiProps.apiCallsInProgress === 0 ? (
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
            <Grid container >
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
    gameProps: state.PaisState,
    apiProps: state.ApiState
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
