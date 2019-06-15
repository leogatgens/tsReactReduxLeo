import React from "react";
import { message } from "antd";
import { GLOBALS } from "../../../../globals/globals-variables";
import TabsView from "../scenes/tabsview";

class TripsContainer extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      initLoading: true,
      datacountries: [],
      datawishlist: [],
      error: ""
    };
  }

  componentDidMount() {
    //this.ObtainWishList();
    this.ListAllCountries();
  }

  ObtainWishList() {
    const parent = this.props;
    const serviceUrl = `${
      GLOBALS.rootAPI
    }/travelers/${"parent.auth.userProfile"}/wishlists`;
    var miInit = {
      headers: { Authorization: `Bearer ${"parent.auth.getAccessToken()"}` }
    };
    fetch(serviceUrl, miInit)
      .then(res => {
        return res.json();
      })
      .then(result => {
        this.setState({
          initLoading: false,
          datawishlist: result
        });
      })
      .catch(error => console.log(error));
  }

  ListAllCountries = () => {
    const serviceUrl = `${GLOBALS.rootAPI}/paises`;
    var miInit = {
      method: "GET",
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
          datacountries: result
        });
      })
      .catch(error => console.log(error));
  };

  handleAddedCountry = () => {
    this.ObtainWishList();
  };

  handleRemoveItem = (value: any) => {
    const serviceUrl = `${
      GLOBALS.rootAPI
    }/travelers/${"this.props.auth.userProfile"}/wishlists/${value}`;
    var miInit = {
      headers: {
        Authorization: `Bearer ${"this.props.auth.getAccessToken()"}`
      },
      method: "DELETE"
    };

    fetch(serviceUrl, miInit)
      .then(res => {
        if (res.ok) {
          message.success("Deleted");
          this.refreshData(value);
        } else {
          message.error("Try again");
        }
      })
      .catch(error => {
        console.log(error);
        message.error("Try again");
      });
  };

  refreshData(value: any) {
    let listaNueva = {} as object[];
    const filteredItems = listaNueva.filter(
      (item: any) => item.idTrip !== value
    );
    this.setState({
      datawishlist: filteredItems,
      error: ""
    });
  }

  render() {
    const dependencias = {
      data: this.props,
      state: this.state
    };
    return (
      <div>
        <TabsView
          data={dependencias}
          onDeleteItem={this.handleRemoveItem}
          onAddItem={this.handleAddedCountry}
        />
      </div>
    );
  }
}

export default TripsContainer;
