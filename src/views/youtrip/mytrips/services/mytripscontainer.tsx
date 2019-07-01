import React from "react";
import "antd/dist/antd.css";
import MyTripsPage from "../components/MyTripsPage";
import { GLOBALS } from "../../../../globals/globals-variables";
import { IPaisVisitado } from "../../../../redux/InterfaceModels";
import { connect } from "react-redux";
import { IAppState, IYoursTripsState } from "../../../../redux/interfaceStates";


interface IState {
  initLoading: boolean;
  misviajes: IPaisVisitado[];
  error: string;
};
interface IProps {
  yoursTripsProps: IYoursTripsState;
}
class MyTripsContainer extends React.Component<IProps,IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      initLoading: true,
      misviajes: [],
      error: ""
    } as IState;
  }
  componentDidMount() {
    const serviceUrl = `${
      GLOBALS.rootAPI
    }/travelers/${"leogatgens@gmail.com"}/trips`;
    let miInit = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(serviceUrl, miInit)
      .then(res => {
        return res.json();
      })
      .then(result => {
        this.setState({
          initLoading: false,
          misviajes: result
        });
      })
      .catch(error =>
        this.setState({ error: error.message, initLoading: false })
      );
  }

  render() {
    return <MyTripsPage 
    misviajes={this.state.misviajes} 
    initLoading={this.state.initLoading} 
    allcountries={this.props.yoursTripsProps.allCountries} />;
  }
}


function mapStateToProps(state: IAppState) {
  return {
    yoursTripsProps: state.yoursTripsState
  };
}

export default connect(mapStateToProps)(MyTripsContainer);
