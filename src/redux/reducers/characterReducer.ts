

// Import Reducer type
import { Reducer } from 'redux';
import { IInterfazState } from '../interfaceStates';
import { InterfazActionTypes } from "../InterfacesActions";
import initialState from './initialState';
import { InterfazActions } from '../actions/InterfazActions';



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

