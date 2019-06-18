import { WishListActions } from './../actions/wishListActions';
// Import Reducer type
import { Reducer } from 'redux';

import { IWishListState } from '../Interfaces';
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

