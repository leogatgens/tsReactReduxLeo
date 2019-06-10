import { ICharacterState, ICountryState, IPais, IApiState } from "../Interfaces";

// Define the initial state
const initialCharacterState: ICharacterState = {  
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
  

  export default {
    initialCharacterState: initialCharacterState,
    defaultState: defaultState,
    initialApiState: initialApiState
  };
  