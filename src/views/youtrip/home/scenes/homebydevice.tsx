import React from "react";
import { ContenedorCardsMobile } from "../components/cardcomponent";
import { ContenedorCardsBrowser } from "../components/horizontalcards";
import { BrowserView, MobileView } from "react-device-detect";
import { IAppState, IYoursTripsState } from "../../../../redux/interfaceStates";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction, bindActionCreators } from "redux";
import * as tripsAcciones from "../../../../redux/actions/YoursTripsActions";
import { connect } from "react-redux";

interface IProps {
  yoursTripsProps: IYoursTripsState;
  allTripsAccions: any;
}
class Homebydevice extends React.Component<IProps> {
  componentDidMount() {    
    
    if (this.props.yoursTripsProps.allCountries.length === 0) {      
      
      this.props.allTripsAccions.ListCountries().catch((error: any) => {
        console.log(error);
      });
    }
  }

  render() {
    return (
      <div>
        <BrowserView>
          <ContenedorCardsBrowser />
        </BrowserView>
        <MobileView>
          <ContenedorCardsMobile />
        </MobileView>
      </div>
    );
  }
}
function mapStateToProps(state: IAppState) {
  return {
    yoursTripsProps: state.yoursTripsState
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, AnyAction>) {
  return {
    allTripsAccions: bindActionCreators(tripsAcciones, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homebydevice);
