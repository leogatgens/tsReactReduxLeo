

// Import Character Typing
import { INextCountryAction,IRequestContryByContinentAction, GameActionTypes } from '../Interfaces';



/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type GameActions = INextCountryAction | IRequestContryByContinentAction;




export const nextCountry = (index : number) => {
  return { type: GameActionTypes.NEXT_COUNTRY , index }
}

export const RequestContinents = (index : number) => {
  return { type: GameActionTypes.REQUEST_COUNTRIES_BY_CONTINENT, index }
}



