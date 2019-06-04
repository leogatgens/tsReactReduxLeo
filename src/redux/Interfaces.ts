

// Define the Character type
export interface ICharacter {
  name: string;  
  url: string;
}
// Define the Character State
export interface ICharacterState {
  readonly characters: ICharacter[];  
}

// Create Action Constants
export enum CharacterActionTypes {
  GET_ALL = 'GET_ALL'

}
// Interface for Get All Action Type
export interface ICharacterGetAllAction {
  type: CharacterActionTypes.GET_ALL;
  characters: ICharacter[];
}



//////////////////////////////////////////////
//////////////////////////////////////////////
////////////////////////////////////////////





//////////////////////////////////////////////
//////////////////////////////////////////////
////////////////////////////////////////////
export interface ICountryState {
  countriesToShow: string,
  indexCountry: number,
  selectedTabIndex: number
}


// Create Action Constants
export enum GameActionTypes {
  NEXT_COUNTRY = 'NEXT_COUNTRY',
  CHANGE_COLOR = 'CHANGE_COLOR',
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




