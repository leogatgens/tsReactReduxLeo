
// Import Reducer type
import { Reducer } from 'redux';
import {
  InterfazActions
} from '../actions/InterfazActions';
import { IInterfazState,InterfazActionTypes } from '../Interfaces';
import initialState from './initialState';



export const characterReducer: Reducer<IInterfazState, InterfazActions> = (
  state = initialState.initialCharacterState,
  action
) => {
  switch (action.type) {
    case InterfazActionTypes.CHANGE_COLOR: {
      return {
        ...state,
        colorDivPrincipal: action.color,
      };
    }
    
    default:
      return state;
  }
};

