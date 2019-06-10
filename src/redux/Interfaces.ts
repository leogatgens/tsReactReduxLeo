// Define the Character type
export interface ICharacter {
  name: string;  
  url: string;
}
// Define the Character State
export interface ICharacterState {  
  readonly colorDivPrincipal: string;  
}
// Create Action Constants
export enum CharacterActionTypes {  
  CHANGE_COLOR = 'CHANGE_COLOR'
}
export interface ICharacterChangeColorAction {
  type: CharacterActionTypes.CHANGE_COLOR;
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
  GET_ALL = 'GET_ALL',  
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
export interface ICharacterGetAllAction {
  type: GameActionTypes.GET_ALL;
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
  API_CALL_ERROR = 'API_CALL_ERROR'

}
export interface IBeginApiCallAction {
  type: ApiActionTypes.BEGIN_API_CALL;  
}

export interface IErrorApiAction {
  type: ApiActionTypes.API_CALL_ERROR;  
}





