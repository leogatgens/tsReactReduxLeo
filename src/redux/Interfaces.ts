

// Define the Character type
export interface ICharacter {
  name: string;  
  url: string;
}
// Define the Character State
export interface ICharacterState {
  readonly paises: IPais[];  
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





//////////////////////////////////////////////
//////////////////////////////////////////////
////////////////////////////////////////////

export interface IPais {  
    name: string,
    flagUrl: string,
    Continent: string
}
export interface ICountryState {  
  countriesToShow: IPais[],
  indexCountry: number,
  selectedTabIndex: number
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
}

// Interface for 
export interface IRequestContryByContinentAction {
  type: GameActionTypes.REQUEST_COUNTRIES_BY_CONTINENT;
  index: number;
}

// Interface for Get All Action Type
export interface ICharacterGetAllAction {
  type: GameActionTypes.GET_ALL;
  paises: IPais[];
}




