

// Import Character Typing
import { INextCountryAction,IRequestContryByContinentAction, GameActionTypes,
   ICharacterGetAllAction, 
   ICharacterState,
   IPais} from '../Interfaces';

// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import {ListapaisesJSON} from '../../shared/data';

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



/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllCharacters: ActionCreator<
  ThunkAction<Promise<any>, ICharacterState, null, ICharacterGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://localhost:44319/api/paises');
      
      dispatch({
        paises: response.data,
        type: GameActionTypes.GET_ALL,
      });
    } catch (err) {
      // dispatch({
      //   paises:  ListapaisesJSON ,
      //   type: GameActionTypes.GET_ALL,
      // });
      console.error(err);
    }
  };
};
