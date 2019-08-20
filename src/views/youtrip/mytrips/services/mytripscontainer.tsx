import React, { useState, useEffect, useContext } from "react";
import "antd/dist/antd.css";
import MyTripsPage from "../components/MyTripsPage";
import { GLOBALS } from "../../../../globals/globals-variables";
import {
  IPaisVisitado,
  INuevoViajeResgistrado
} from "../../../../redux/InterfaceModels";
import { connect } from "react-redux";
import { IAppState, IYoursTripsState } from "../../../../redux/interfaceStates";
import { message } from "antd";

interface IState {
  initLoading: boolean;
  misviajes: IPaisVisitado[];
  error: string;
}
interface IProps {
  yoursTripsProps: IYoursTripsState;
}
const MyTripsContainer = (props: IProps, state: IState) => {
  const [error, seterror] = useState("");
  const [misviajes, setmisviajes] = useState([]);
  const [initLoading, setinitLoading] = useState(true);

  const onAddItem = (newVisitedCountry: INuevoViajeResgistrado) => {
    newVisitedCountry.ClientId = props.yoursTripsProps.emailUsuario;

    const serviceUrl = `${GLOBALS.rootAPI}/travelers/${
      props.yoursTripsProps.emailUsuario
    }/trips`;
    let miInit = {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(newVisitedCountry)
    };
    fetch(serviceUrl, miInit)
      .then(res => {
        console.log(res);
        if (res.status === 201) {
          message.success("País agregado correctamente.");
        } else {
          message.error("Try again");
        }
      })
      .catch(error => console.log(error));
  };


  useEffect(() => {
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
          setinitLoading(false);
          setmisviajes(result);
        
      })
      .catch(error =>{ 
        seterror(error.message);
        setinitLoading( false);
      })
      
  },[]);
 

  return (
    <MyTripsPage
      misviajes={misviajes}
      initLoading={initLoading}
      allcountries={props.yoursTripsProps.allCountries}
      onAddItem={onAddItem}
    />
  );
};

function mapStateToProps(state: IAppState) {
  return {
    yoursTripsProps: state.yoursTripsState
  };
}

export default connect(mapStateToProps)(MyTripsContainer);
