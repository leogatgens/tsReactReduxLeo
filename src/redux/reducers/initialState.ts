import { IInterfazState, ICountryState, IPais, IApiState, IYoursTripsState } from "../InterfacesRedux";

// Define the initial state
const initialCharacterState: IInterfazState = {  
    colorDivPrincipal : 'white'
  };
  
  const defaultState: ICountryState = {
    listaTodosLosPaises: [] as Array<IPais>,
    paisesMostrandose: [] as Array<IPais>,
    paisesHistorialJuego: [] as Array<IPais>,
    indexCountry: 0,
    selectedTabIndex: 0,
    juegoIniciado : false,
    emailUsuario : ''
  }

  const initialApiState: IApiState = {  
    apiCallsInProgress : 0
  };

  const yoursTripsState: IYoursTripsState = {
    allCountries: [], 
    emailUsuario : 'leogatgens@gmail.com'
  }
  

  export default {
    initialCharacterState: initialCharacterState,
    defaultState: defaultState,
    initialApiState: initialApiState,
    yoursTripsState : yoursTripsState
  };
  