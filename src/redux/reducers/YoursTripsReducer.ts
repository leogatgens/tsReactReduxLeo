import { WishListActions } from '../actions/YoursTripsActions';
// Import Reducer type
import { Reducer } from 'redux';

import { IWishListState } from '../InterfacesRedux';
import initialState from './initialState';



export const wishListReducer: Reducer<IWishListState, WishListActions> = (
  state = initialState.wishListState,
  action
) => {
  switch (action.type) {
    
    default:
      return state;
  }
};

