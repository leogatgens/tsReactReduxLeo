// Import Reducer type
import { Reducer } from 'redux';
import {
  CharacterActions
  
} from '../actions/CharacterActions';
import { ICharacterState,CharacterActionTypes } from '../Interfaces';


// Define the initial state
const initialCharacterState: ICharacterState = {
  characters: [],
};

export const characterReducer: Reducer<ICharacterState, CharacterActions> = (
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    case CharacterActionTypes.GET_ALL: {
      return {
        ...state,
        characters: action.characters,
      };
    }
    
    default:
      return state;
  }
};