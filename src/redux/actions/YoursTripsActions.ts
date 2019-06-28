import { WishListActionTypes, IGetWishListAction, IYoursTripsState } from "../InterfacesRedux";
import { beginApiCall, apiCallSucess, apiCallError } from "./apiStatusActions";
import { GLOBALS } from "../../globals/globals-variables";
import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from 'axios';

  
export type WishListActions =  IGetWishListAction;

  export function loadWhishListSuccess(wishList : any) {
    return { type: WishListActionTypes.GET_WISH_LIST, wishList };
  }
  
  export const getWishList: ActionCreator<
    ThunkAction<Promise<any>, IYoursTripsState, null, IGetWishListAction>
  > = () => {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(beginApiCall());
        const serviceUrl = `${GLOBALS.rootAPI}/game/paises`;
        const response  = await axios.get(serviceUrl);      
        dispatch(loadWhishListSuccess(response.data));
        dispatch(apiCallSucess());
      } catch (err) {
        dispatch(apiCallError());
        throw err;
      }
    };
  };
  