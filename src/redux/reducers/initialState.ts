import { IInterfazState, ICountryState, IPais, IApiState, IWishListState } from "../Interfaces";

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

  const wishListState: IWishListState = {
    wishList: [], 
    emailUsuario : ''
  }
  

  export default {
    initialCharacterState: initialCharacterState,
    defaultState: defaultState,
    initialApiState: initialApiState,
    wishListState : wishListState
  };
  