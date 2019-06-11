import { ApiActions } from './../actions/apiStatusActions';
import { ApiActionTypes, IApiState } from './../Interfaces';
import { Reducer } from 'redux';
import initialState from './initialState';

export const apiReducer: Reducer<IApiState, ApiActions> = (
  state = initialState.initialApiState,
  action
) => {
  switch (action.type) {
    case  ApiActionTypes.BEGIN_API_CALL : {
      return {
        ...state,
        apiCallsInProgress : state.apiCallsInProgress + 1,          
      };
    }
    case ApiActionTypes.API_CALL_ERROR : {
      return {
        ...state,
        apiCallsInProgress :  state.apiCallsInProgress - 1,
      }
    }    
    case ApiActionTypes.API_CALL_SUCCESS : {
      return {
        ...state,
        apiCallsInProgress :  state.apiCallsInProgress - 1,
      }
    }    
    default:
      return state;
  }
};
