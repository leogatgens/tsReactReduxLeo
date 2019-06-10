
// Import Reducer type
import { Reducer } from 'redux';
import {
  CharacterActions  
} from '../actions/CharacterActions';
import { ICharacterState,CharacterActionTypes } from '../Interfaces';
import initialState from './initialState';



export const characterReducer: Reducer<ICharacterState, CharacterActions> = (
  state = initialState.initialCharacterState,
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

