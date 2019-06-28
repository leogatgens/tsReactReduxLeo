import { YoursTripsActions } from '../actions/YoursTripsActions';
// Import Reducer type
import { Reducer } from 'redux';

import { IYoursTripsState, YoursTripsActionTypes } from '../InterfacesRedux';
import initialState from './initialState';



export const wishListReducer: Reducer<IYoursTripsState, YoursTripsActions> = (
  state = initialState.yoursTripsState,
  action
) => {
  switch (action.type) {
    case (YoursTripsActionTypes.GET_ALL_COUNTRIES_LIST):       
     return {
       ...state,       
       allCountries:  action.allCountries
     };
    default:
      return state;
  }
};

