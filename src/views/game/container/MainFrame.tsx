import * as React from "react";
import { connect } from "react-redux";
import {
  IAppState,
  ICountryState,
  IInterfazState
} from "../../../redux/interfaceStates";
import Footer from "../components/Footer";
import * as countryacciones from "../../../redux/actions/GameActions";
import * as characteracciones from "../../../redux/actions/InterfazActions";
import { AnyAction, bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import TabGame from "./TabGame";

// Create the containers interface
interface IProps {
  interfazProps: IInterfazState;
  PaisState: ICountryState;
  gameactions: any;
  characteraccions: any;
  
}
class MainFrame extends React.Component<IProps> {


  componentDidMount() {
    if (this.props.PaisState.continents.length <= 0) {
      this.props.gameactions.getAllContinents().catch((error: any) => {
        console.log(error);
      });
    }
  }

  handleIndexChange = (index: number) => {
    this.props.characteraccions.CambiarFondo("white");
    this.props.gameactions.RequestContinents(
      index,
      this.props.PaisState.listaTodosLosPaises,
      this.props.PaisState.continents
    );
  };

  public render() {
    console.log("....redering MainFrame");
    return (
      <React.Fragment>
        <div
          style={{
            background: this.props.interfazProps.colorDivPrincipal
          }}
        >
          <TabGame />
          <Footer
            data={this.props.PaisState.continents}
            handleIndexChange={this.handleIndexChange}
            selectedIndex={this.props.PaisState.selectedTabIndex}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
    interfazProps: store.countryState,
    PaisState: store.PaisState
  };
};
function mapDispatchToProps(dispatch: ThunkDispatch<any, any, AnyAction>) {
  return {
    gameactions: bindActionCreators(countryacciones, dispatch),
    characteraccions: bindActionCreators(characteracciones, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainFrame);
