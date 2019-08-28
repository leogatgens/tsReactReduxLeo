import React, { useState, useEffect } from "react";
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
import { useAuth0 } from "../../../../react-auth0-spa";

interface IState {
  initLoading: boolean;
  misviajes: IPaisVisitado[];
  error: string;
}
interface IProps {
  yoursTripsProps: IYoursTripsState;
}
const MyTripsContainer = (props: IProps, state: IState) => {
  const { getTokenSilently } = useAuth0();

  const [error, seterror] = useState(null);
  const [misviajes, setmisviajes] = useState([]);
  const [initLoading, setinitLoading] = useState(true);

  const onAddItem = (newVisitedCountry: INuevoViajeResgistrado) => {
    newVisitedCountry.ClientId = props.yoursTripsProps.emailUsuario;
    const token = getTokenSilently();
    const serviceUrl = `${GLOBALS.rootAPI}/travelers/${
      props.yoursTripsProps.emailUsuario
    }/trips`;
    let miInit = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
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

 
//   const callApi = async () => {
//     try {
//       const token = await getTokenSilently();
// console.log(token);
//       const response = await fetch("/api/external", {        
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       const responseData = await response.json();

//      console.log(responseData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

  const callApi = () => {
    let tokenObtenido = null;
    const token = getTokenSilently();

    console.log(token);
    token.then(
      function(value: any) {
        console.log(value);
        tokenObtenido = value;
        // expected output: 123
        const serviceUrl = `${
          GLOBALS.rootAPI
        }/travelers/${"leogatgens@gmail.com"}/trips`;
        let miInit = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenObtenido}`
          }
        };
        console.log(miInit);
        fetch(serviceUrl, miInit)
          .then(res => {
            return res.json();
          })
          .then(result => {
            setinitLoading(false);
            setmisviajes(result);
          })
          .catch(error => {
            seterror(error.message);
            setinitLoading(false);
          });
      },
      (error: any) => {
        console.error("Función de rechazo llamada: ", error);
        setinitLoading(false);
      }
    );
  };
 
  useEffect(() => {

    callApi();
   
  }, []);

  return (

 <React.Fragment>
    <MyTripsPage
      misviajes={misviajes}
      initLoading={initLoading}
      allcountries={props.yoursTripsProps.allCountries}
      onAddItem={onAddItem}
    />
    
    </React.Fragment>
  );
};

function mapStateToProps(state: IAppState) {
  return {
    yoursTripsProps: state.yoursTripsState
  };
}

export default connect(mapStateToProps)(MyTripsContainer);
