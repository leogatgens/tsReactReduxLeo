import React from "react";
import { message } from "antd";
import { GLOBALS } from "../../../../globals/globals-variables";
import TabsView from "../scenes/tabsview";
import { IWishListState, IAppState } from "../../../../redux/Interfaces";
import { connect } from "react-redux";

interface IProps {  
  wishListProps : IWishListState;
}
class TripsContainer extends React.Component<IProps> {
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
    this.ObtainWishList();
    this.ListAllCountries();
  }

  ObtainWishList() {   
    const serviceUrl = `${
      GLOBALS.rootAPI
    }/travelers/${this.props.wishListProps.emailUsuario}/wishlists`;
    let miInit = {
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
          initLoading: false,
          datawishlist: result
        });
      })
      .catch(error => { 
        this.setState({
          initLoading: false          
        });
        console.log(error)}
      );
  }

  ListAllCountries = () => {
    const serviceUrl = `${GLOBALS.rootAPI}/paises`;
    let miInit = {
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

function mapStateToProps(state: IAppState) {
  return {
    wishListProps : state.wishListState,
  };
}

export default connect(mapStateToProps)(TripsContainer);
