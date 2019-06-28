import { WishListActions } from '../actions/YoursTripsActions';
// Import Reducer type
import { Reducer } from 'redux';

import { IYoursTripsState } from '../InterfacesRedux';
import initialState from './initialState';



export const wishListReducer: Reducer<IYoursTripsState, WishListActions> = (
  state = initialState.yoursTripsState,
  action
) => {
  switch (action.type) {
    
    default:
      return state;
  }
};

