

// Import Character Typing
import { ICharacterGetAllAction,ICharacterState,CharacterActionTypes,ICharacterChangeColorAction } from '../Interfaces';


export const CambiarFondo = (color : string) => {
  return { type: CharacterActionTypes.CHANGE_COLOR , color }
}
/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type CharacterActions =  ICharacterChangeColorAction;

