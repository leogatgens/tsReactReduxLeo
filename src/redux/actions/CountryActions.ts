

// Import Character Typing
import { INextCountryAction,IRequestContryByContinentAction, GameActionTypes,
   ICharacterGetAllAction, 
   ICharacterState} from '../Interfaces';

// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type GameActions = INextCountryAction | IRequestContryByContinentAction | ICharacterGetAllAction;




export const nextCountry = (index : number) => {
  return { type: GameActionTypes.NEXT_COUNTRY , index }
}

export const RequestContinents = (index : number) => {
  return { type: GameActionTypes.REQUEST_COUNTRIES_BY_CONTINENT, index }
}



/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllCharacters: ActionCreator<
  ThunkAction<Promise<any>, ICharacterState, null, ICharacterGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://localhost:44319/api/paises');
      console.log(response);
      dispatch({
        paises: response.data,
        type: GameActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
