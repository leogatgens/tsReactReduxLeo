import { IPais } from "./InterfaceModels";

// Create Action Constants
export enum InterfazActionTypes {
  CHANGE_COLOR = 'CHANGE_COLOR'
}
export interface IInterfazChangeColorAction {
  type: InterfazActionTypes.CHANGE_COLOR;
  color: string;
}

// Create Action Constants
export enum GameActionTypes {
  NEXT_COUNTRY = 'NEXT_COUNTRY',
  REQUEST_COUNTRIES_BY_CONTINENT = 'REQUEST_COUNTRIES_BY_CONTINENT',
  GET_ALL_SUCCESS = 'GET_ALL_SUCCESS',  
  GET_CONTINENTS_SUCCESS = 'GET_CONTINENTS_SUCCESS',  
}

export interface INextCountryAction {
  type: GameActionTypes.NEXT_COUNTRY;
  index: number;
  paises: IPais[];
  continents: string[];
}

export interface IRequestContryByContinentAction {
  type: GameActionTypes.REQUEST_COUNTRIES_BY_CONTINENT;
  index: number;
  paises: IPais[];
  continents: string[];
}


export interface IGameGetAllContriesAction {
  type: GameActionTypes.GET_ALL_SUCCESS;
  paises: IPais[];
}

export interface IGameGetAllContinentsAction {
  type: GameActionTypes.GET_CONTINENTS_SUCCESS;
  continents: string[];
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
// Create Action Constants
export enum YoursTripsActionTypes {  
  GET_ALL_COUNTRIES_LIST = 'GET_ALL_COUNTRIES_LIST'  
}
export interface IGetYoursTripsAction {
  type: YoursTripsActionTypes.GET_ALL_COUNTRIES_LIST;  
  allCountries : [];
}
