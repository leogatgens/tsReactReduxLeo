import { INextCountryAction,IRequestContryByContinentAction, GameActionTypes,
  IGameGetAllContriesAction, 
   IPais,IGameGetContinentsAction, IInterfazState} from '../Interfaces';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { beginApiCall, apiCallError, apiCallSucess } from './apiStatusActions';

export type GameActions = INextCountryAction | IRequestContryByContinentAction | IGameGetAllContriesAction;
export const nextCountry = (index : number,paises : IPais[]) => {
  return { type: GameActionTypes.NEXT_COUNTRY , index,paises }
}
export const RequestContinents = (index : number,paises :IPais[]) => {
  return { type: GameActionTypes.REQUEST_COUNTRIES_BY_CONTINENT, index,paises }
}

export function loadCountriesSuccess(paises : IPais[]) {
  return { type: GameActionTypes.GET_ALL_SUCCESS, paises };
}

export function loadContinentsSuccess(paises : string[]) {
  return { type: GameActionTypes.GET_CONTINENTS_SUCCESS, paises };
}

export const getAllCountries: ActionCreator<
  ThunkAction<Promise<any>, IInterfazState, null, IGameGetAllContriesAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(beginApiCall());
      const response  = await axios.get('https://localhost:44319/api/paises');      
      dispatch(loadCountriesSuccess(response.data));
      dispatch(apiCallSucess());
    } catch (err) {
      dispatch(apiCallError());
      throw err;
    }
  };
};

export const getAllContinents: ActionCreator<
  ThunkAction<Promise<any>, IInterfazState, null, IGameGetContinentsAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(beginApiCall());
      const response  = await axios.get('https://localhost:44319/api/continent');      
      dispatch(loadContinentsSuccess(response.data));
      dispatch(apiCallSucess());
    } catch (err) {
      dispatch(apiCallError());
      throw err;
    }
  };
};

