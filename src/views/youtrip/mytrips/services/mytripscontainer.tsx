import React from "react";
import "antd/dist/antd.css";
import MyTripsPage from "../components/MyTripsPage";
import { GLOBALS } from "../../../../globals/globals-variables";

class TripsOption extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      initLoading: true,
      data: [],
      error: ""
    };
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
          data: result
        });
      })
      .catch(error =>
        this.setState({ error: error.message, initLoading: false })
      );
  }

  render() {
    return <MyTripsPage data={this.state} />;
  }
}

export default TripsOption;
