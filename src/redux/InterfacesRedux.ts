import moment from "moment";

// Define the Character type
export interface ICharacter {
  name: string;  
  url: string;
}
// Define the Character State
export interface IInterfazState {  
  readonly colorDivPrincipal: string;  
}
// Create Action Constants
export enum InterfazActionTypes {  
  CHANGE_COLOR = 'CHANGE_COLOR'
}
export interface IInterfazChangeColorAction {
  type: InterfazActionTypes.CHANGE_COLOR;
  color: string;
}
//////////////////////////////////////////////
//////////////////////////////////////////////
////////////////////////////////////////////


export interface IPais {  
    id : number,
    name: string,
    flagUrl: string,
    continent: string
}
export interface ICountryState {  
  listaTodosLosPaises :  IPais[],
  paisesMostrandose: IPais[],
  paisesHistorialJuego : IPais[],
  indexCountry: number,
  selectedTabIndex: number,
  juegoIniciado : boolean,
  emailUsuario : string 
}
// Create Action Constants
export enum GameActionTypes {
  NEXT_COUNTRY = 'NEXT_COUNTRY',
  REQUEST_COUNTRIES_BY_CONTINENT = 'REQUEST_COUNTRIES_BY_CONTINENT',
  GET_ALL_SUCCESS = 'GET_ALL_SUCCESS',  
  GET_CONTINENTS_SUCCESS = 'GET_CONTINENTS_SUCCESS',  
}
// Interface for 
export interface INextCountryAction {
  type: GameActionTypes.NEXT_COUNTRY;
  index: number;
  paises: IPais[];
}
// Interface for 
export interface IRequestContryByContinentAction {
  type: GameActionTypes.REQUEST_COUNTRIES_BY_CONTINENT;
  index: number;
  paises: IPais[];
}

// Interface for Get All Action Type
export interface IGameGetAllContriesAction {
  type: GameActionTypes.GET_ALL_SUCCESS;
  paises: IPais[];
}

export interface IGameGetContinentsAction {
  type: GameActionTypes.GET_CONTINENTS_SUCCESS;
  paises: IPais[];
}
//////////////////////////////////////////////
//////////////////////////////////////////////
////////////////////////////////////////////

// Define the Character State
export interface IApiState {  
  readonly apiCallsInProgress: number;    
}
// Create Action Constants
export enum ApiActionTypes {  
  BEGIN_API_CALL = 'BEGIN_API_CALL',
  API_CALL_ERROR = 'API_CALL_ERROR',
  API_CALL_SUCCESS = 'API_CALL_SUCCESS',

}
export interface IBeginApiCallAction {
  type: ApiActionTypes.BEGIN_API_CALL;  
}

export interface IErrorApiAction {
  type: ApiActionTypes.API_CALL_ERROR;  
}

export interface IApiCallSucessAction {
  type: ApiActionTypes.API_CALL_SUCCESS;  
}







export interface IAppState {
  countryState: IInterfazState;
  PaisState: ICountryState;
  ApiState: IApiState;
  wishListState : IWishListState;
}
//////////////////////////////////////////////
//////////////////////////////////////////////
////////////////////////////////////////////

// Create Action Constants
export enum WishListActionTypes {  
  GET_WISH_LIST = 'GET_WISH_LIST',  
  GET_CONTINENTS_SUCCESS = 'GET_CONTINENTS_SUCCESS',  
}

export interface IWishListState {  
  wishList : [],  
  emailUsuario : string 
}

export interface IGetWishListAction {
  type: WishListActionTypes.GET_WISH_LIST;  
}




export interface IPaisVisitado {  
  id : number,
  pais: string,
  urlFlag: string,
  continent: string
}

export interface IWishListItem {
  idTrip: number;
  idPais: number;
  name: string;
  urlFlag: string;
  annoDeLaVisita: string;
}

export interface IStateTripsContainer {
  initLoading: boolean;
  datacountries: IPaisCompleto[];
  datawishlist: IWishListItem[];
  error: string;
}

export interface IPaisCompleto {
  capital: string;
  continent: string;
  idCountry: number;
  name: string;
  urlFlag:string;
}


export interface INuevoWishItemPais {  
  IdPais:number;
  DateTrip: moment.Moment;

}


export interface IKeyValuePair {  
  key:number;
  value: string;

}