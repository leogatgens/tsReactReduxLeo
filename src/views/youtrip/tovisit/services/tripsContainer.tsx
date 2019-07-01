import React from "react";
import { message } from "antd";
import { GLOBALS } from "../../../../globals/globals-variables";
import TabsView from "../scenes/tabsview";
import {  IStateTripsContainer,IWishListItem,INuevoWishItemPais } from "../../../../redux/InterfaceModels";
import { IYoursTripsState, IAppState } from "../../../../redux/interfaceStates";
import { connect } from "react-redux";
import axios from "axios";

interface IProps {
  yoursTripsProps: IYoursTripsState;
}


class TripsContainer extends React.Component<IProps, IStateTripsContainer> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      initLoading: true,
      datacountries: this.props.yoursTripsProps.allCountries,
      datawishlist:  [] as Array<IWishListItem>,
      error: ""
    };
  }

  componentDidUpdate(){
    console.log("componentDidUpdate TripsContainer");
  }
  componentDidMount() {
    this.ObtainWishList();    
    console.log("componentDidMount TripsContainer");
  }

  ObtainWishList = async () => {
    try {
      const serviceUrl = `${GLOBALS.rootAPI}/travelers/${
        this.props.yoursTripsProps.emailUsuario
      }/wishlists`;
      let miInit = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const response = await axios.get(serviceUrl, miInit);
      
      this.setState({
        initLoading: false,
        datawishlist: response.data
      });
    } catch (err) {
      this.setState({
        initLoading: false
      });
      console.log(err);
    }
  };

  

  handleAddedCountry = (newWishtItemCountry: INuevoWishItemPais) => {
    let newWishtCountry = {
      IdPais: newWishtItemCountry.IdPais,
      DateTrip: newWishtItemCountry.DateTrip,
      ClientId: this.props.yoursTripsProps.emailUsuario
    };
    
    const serviceUrl = `${GLOBALS.rootAPI}/travelers/${
      newWishtCountry.ClientId
    }/wishlists`;
    var miInit = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify(newWishtCountry)
    };
    fetch(serviceUrl, miInit)
      .then(res => {
        if (res.ok) {
          message.success("País agregado correctamente.");
          this.ObtainWishList();
        } else {
          message.error("Try again");
        }
      })
      .catch(error => {
        console.log(error);
        message.error("Try again");
      });
  };

  handleRemoveItem = (value: number) => {
    const serviceUrl = `${GLOBALS.rootAPI}/travelers/${
      this.props.yoursTripsProps.emailUsuario
    }/wishlists/${value}`;
    var miInit = {
      method: "DELETE"
    };
    fetch(serviceUrl, miInit)
      .then(res => {
        if (res.ok) {
          message.success("País eliminado de la lista.");
          this.refreshData(value);
        } else {
          message.error("Try again");
        }
      })
      .catch(error => {
        console.log(error);
        message.error("Ocurrio un error inesperado opsssTry again");
      });
  };

  refreshData(value: number) {
    let listaNueva = this.state.datawishlist;

    const filteredItems = listaNueva.filter(
      (item: IWishListItem) => item.idTrip !== value
    );
    this.setState({
      datawishlist: filteredItems,
      error: ""
    });
  }

  render() {
    
    return (
      <div>
        <TabsView
          dependencias={this.state}
          onDeleteItem={this.handleRemoveItem}
          onAddItem={this.handleAddedCountry}
        />
      </div>
    );
  }
}

function mapStateToProps(state: IAppState) {
  return {
    yoursTripsProps: state.yoursTripsState
  };
}

export default connect(mapStateToProps)(TripsContainer);
