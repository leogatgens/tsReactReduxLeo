import React from "react";
import "antd/dist/antd.css";
import MyTripsPage from "../components/MyTripsPage";
import { GLOBALS } from "../../../../globals/globals-variables";


interface IState {
  initLoading: boolean;
  misviajes: [];
  error: string;
};
interface IProps {

}
class TripsOption extends React.Component<IProps,IState> {
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
    return <MyTripsPage misviajes={this.state.misviajes} initLoading={this.state.initLoading} />;
  }
}

export default TripsOption;
