import { ApiActionTypes } from './../Interfaces';
import { INextCountryAction,IRequestContryByContinentAction, GameActionTypes,
   ICharacterGetAllAction, 
   ICharacterState,
   IPais} from '../Interfaces';
// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { beginApiCall, apiCallError, apiCallSucess } from './apiStatusActions';
/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type GameActions = INextCountryAction | IRequestContryByContinentAction | ICharacterGetAllAction;
export const nextCountry = (index : number,paises : IPais[]) => {
  return { type: GameActionTypes.NEXT_COUNTRY , index,paises }
}
export const RequestContinents = (index : number,paises :IPais[]) => {
  return { type: GameActionTypes.REQUEST_COUNTRIES_BY_CONTINENT, index,paises }
}

export function loadAuthorsSuccess(paises : IPais[]) {
  return { type: GameActionTypes.GET_ALL_SUCCESS, paises };
}

/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllCharacters: ActionCreator<
  ThunkAction<Promise<any>, ICharacterState, null, ICharacterGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(beginApiCall());
      const response  = await axios.get('https://localhost:44319/api/paises');      
      dispatch(loadAuthorsSuccess(response.data));
      dispatch(apiCallSucess());
    } catch (err) {
      dispatch(apiCallError());
      throw err;
    }
  };
};
