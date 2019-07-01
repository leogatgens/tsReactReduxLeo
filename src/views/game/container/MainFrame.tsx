import * as React from "react";
import { connect } from "react-redux";
import {
  IAppState,
  ICountryState,
  IInterfazState
} from "../../../redux/interfaceStates";
import Footer from "../components/Footer";
import { Continents } from "../../../shared/data";
import * as countryacciones from "../../../redux/actions/GameActions";
import * as characteracciones from "../../../redux/actions/InterfazActions";
import { AnyAction, bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import TabGame from "./TabGame";

// Create the containers interface
interface IProps {
  interfazProps: IInterfazState;
  PaisState: ICountryState;
  countryaccions: any;
  characteraccions: any;
}

class MainFrame extends React.Component<IProps> {
  handleIndexChange = (index: number) => {
    this.props.characteraccions.CambiarFondo("white");
    this.props.countryaccions.RequestContinents(
      index,
      this.props.PaisState.listaTodosLosPaises
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
            data={Continents}
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
    countryaccions: bindActionCreators(countryacciones, dispatch),
    characteraccions: bindActionCreators(characteracciones, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainFrame);
