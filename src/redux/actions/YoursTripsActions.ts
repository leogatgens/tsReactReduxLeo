import { YoursTripsActionTypes, IGetYoursTripsAction, IYoursTripsState } from "../InterfacesRedux";
import { beginApiCall, apiCallSucess, apiCallError } from "./apiStatusActions";
import { GLOBALS } from "../../globals/globals-variables";
import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from 'axios';

  
export type YoursTripsActions =  IGetYoursTripsAction;

  export function GetAllCountriesSuccess(allCountries : []) {
    return { type: YoursTripsActionTypes.GET_ALL_COUNTRIES_LIST, allCountries };
  }
  
  export const ListCountries: ActionCreator<
    ThunkAction<Promise<any>, IYoursTripsState, null, IGetYoursTripsAction>
  > = () => {
    return async (dispatch: Dispatch) => {
      try {
        dispatch(beginApiCall());
        const serviceUrl = `${GLOBALS.rootAPI}/game/paises`;
        const response  = await axios.get(serviceUrl);      
        dispatch(GetAllCountriesSuccess(response.data));
        dispatch(apiCallSucess());
      } catch (err) {
        dispatch(apiCallError());
        throw err;
      }
    };
  };
  