

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
  GET_ALL = 'GET_ALL',
  CHANGE_COLOR = 'CHANGE_COLOR',
  NEXT_COUNTRY = 'NEXT_COUNTRY'
}



// Interface for Get All Action Type
export interface ICharacterGetAllAction {
  type: CharacterActionTypes.GET_ALL;
  characters: ICharacter[];
}


