
// Import Reducer type
import { Reducer } from 'redux';
import {
  CharacterActions  
} from '../actions/CharacterActions';
import { ICharacterState,CharacterActionTypes } from '../Interfaces';


// Define the initial state
const initialCharacterState: ICharacterState = {  
  colorDivPrincipal : 'white'
};

export const characterReducer: Reducer<ICharacterState, CharacterActions> = (
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    case CharacterActionTypes.CHANGE_COLOR: {
      return {
        ...state,
        colorDivPrincipal: action.color,
      };
    }
    
    default:
      return state;
  }
};

