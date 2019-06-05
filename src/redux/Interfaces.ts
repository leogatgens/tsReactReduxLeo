

// Define the Character type
export interface ICharacter {
  name: string;  
  url: string;
}
// Define the Character State
export interface ICharacterState {
  readonly characters: ICharacter[];  
  readonly colorDivPrincipal: string;  
}

// Create Action Constants
export enum CharacterActionTypes {
  GET_ALL = 'GET_ALL',
  CHANGE_COLOR = 'CHANGE_COLOR'

}
// Interface for Get All Action Type
export interface ICharacterGetAllAction {
  type: CharacterActionTypes.GET_ALL;
  characters: ICharacter[];
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
  REQUEST_COUNTRIES_BY_CONTINENT = 'REQUEST_COUNTRIES_BY_CONTINENT'
  
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




